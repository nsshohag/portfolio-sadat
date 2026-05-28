/**
 * Proxies /api → local visitor server (npm run dev).
 * Skipped under `vercel dev` — Vercel serves /api/visitor itself.
 */
module.exports = function setupProxy(app) {
  if (process.env.VERCEL) {
    return;
  }

  const proxy = require("http-proxy-middleware");
  const apiPort = process.env.VISITOR_API_PORT || 3001;

  app.use(
    "/api",
    proxy({
      target: `http://localhost:${apiPort}`,
      changeOrigin: true,
    })
  );
};
