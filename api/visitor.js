const admin = require("firebase-admin");
const UAParser = require("ua-parser-js");

function initFirebase() {
  if (admin.apps.length) {
    return admin;
  }

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY;
  const databaseURL = process.env.FIREBASE_DATABASE_URL;

  if (!projectId || !clientEmail || !privateKey || !databaseURL) {
    throw new Error("Missing Firebase environment variables");
  }

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey: privateKey.replace(/\\n/g, "\n"),
    }),
    databaseURL,
  });

  return admin;
}

function getClientIp(req) {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string" && forwarded.length > 0) {
    return forwarded.split(",")[0].trim();
  }
  if (Array.isArray(forwarded) && forwarded.length > 0) {
    return forwarded[0];
  }
  return req.socket?.remoteAddress || "unknown";
}

function isBotUserAgent(userAgent) {
  return /bot|crawl|spider|slurp|facebookexternalhit|headless/i.test(
    userAgent || ""
  );
}

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const firebaseAdmin = initFirebase();
    const db = firebaseAdmin.database();

    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};

    const { visitorId, creationTimestamp, owner, path, referrer, language } =
      body;

    if (!visitorId || typeof visitorId !== "string") {
      return res.status(400).json({ error: "visitorId is required" });
    }

    const safeVisitorId = visitorId.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 64);
    if (!safeVisitorId) {
      return res.status(400).json({ error: "Invalid visitorId" });
    }

    const userAgent = req.headers["user-agent"] || "";
    const parser = new UAParser(userAgent);
    const ua = parser.getResult();
    const ip = getClientIp(req);
    const bot = isBotUserAgent(userAgent);
    const device = ua.device.type || "desktop";
    const os = ua.os.name || "Unknown";
    const browser = ua.browser.name || "Unknown";
    const country = req.headers["x-vercel-ip-country"] || null;

    const visitorKey = `visitor_${safeVisitorId}`;
    const visitorRef = db.ref(`visitors/ids/${visitorKey}`);
    const existing = await visitorRef.once("value");

    if (existing.exists()) {
      return res.status(200).json({ ok: true, alreadyRegistered: true });
    }

    const record = {
      visitorId: safeVisitorId,
      ip,
      device,
      os,
      browser,
      userAgent,
      creation_timestamp:
        Number(creationTimestamp) || Math.floor(Date.now() / 1000),
      owner: owner || process.env.VISITOR_OWNER || "Sadat",
      path: path || "/",
      referrer: referrer || "",
      language: language || null,
      country,
      isBot: bot,
    };

    await visitorRef.set(record);

    await db.ref("visitors/totalUniqueCount").transaction((current) => {
      return (current || 0) + 1;
    });

    if (bot) {
      await db.ref("visitors/totalBotCount").transaction((current) => {
        return (current || 0) + 1;
      });
    }

    return res.status(200).json({ ok: true, visitorKey });
  } catch (error) {
    console.error("visitor api error:", error);
    return res.status(500).json({ error: "Failed to register visitor" });
  }
};
