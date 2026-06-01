const STORAGE_KEY = "portfolio_visitor";

function generateVisitorId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID().replace(/-/g, "").slice(0, 12);
  }
  return Math.random().toString(36).slice(2, 14);
}

export function getStoredVisitor() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function saveVisitor(record) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
  localStorage.setItem("0Owner", "Sadat!!!");
  console.log("Visitor saved by Sadat !!! :", record);
}

async function registerVisitor(record) {
  const response = await fetch("/api/visitor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      visitorId: record.visitorId,
      creationTimestamp: record.creationTimestamp,
      owner: record.owner,
      path: window.location.pathname,
      referrer: document.referrer || "",
      language: navigator.language,
    }),
  });

  if (!response.ok) {
    throw new Error(`Visitor API failed: ${response.status}`);
  }

  return response.json();
}

export function initVisitorTracking() {
  const existing = getStoredVisitor();
  if (existing && existing.visitorId) {
    console.log("Thanks for visiting my portfolio !!!");
    return;
  }

  const record = {
    visitorId: generateVisitorId(),
    creationTimestamp: Math.floor(Date.now() / 1000),
    owner: "Sadat",
  };

  console.log("Thanks for visiting my portfolio for the first time !!!");
  saveVisitor(record);

  registerVisitor(record).catch((error) => {
    console.warn("Could not sync visitor to analytics:", error.message);
  });
}
