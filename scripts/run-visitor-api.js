/**
 * Local visitor API for `npm run dev` (pairs with src/setupProxy.js).
 * Loads .env from project root — same Firebase vars as Vercel.
 */
const path = require("path");
const http = require("http");

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const visitorHandler = require("../api/visitor");

const PORT = process.env.VISITOR_API_PORT || 3001;

/** Vercel-style res helpers for the shared api/visitor handler */
function enhanceResponse(res) {
  res.status = function status(code) {
    res.statusCode = code;
    return res;
  };
  res.json = function json(payload) {
    if (!res.headersSent) {
      res.setHeader("Content-Type", "application/json");
    }
    res.end(JSON.stringify(payload));
  };
  const originalEnd = res.end.bind(res);
  res.end = function end(data) {
    if (data !== undefined && data !== null) {
      return originalEnd(data);
    }
    return originalEnd();
  };
  return res;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = "";
    req.on("data", (chunk) => {
      data += chunk;
    });
    req.on("end", () => resolve(data));
    req.on("error", reject);
  });
}

const server = http.createServer(async (req, res) => {
  if (!req.url || !req.url.startsWith("/api/visitor")) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  try {
    if (req.method === "POST") {
      const raw = await readBody(req);
      req.body = raw ? JSON.parse(raw) : {};
    }
    await visitorHandler(req, enhanceResponse(res));
  } catch (error) {
    console.error("local visitor api error:", error);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Server error" }));
    }
  }
});

server.listen(PORT, () => {
  console.log(`Visitor API listening on http://localhost:${PORT}/api/visitor`);
});
