const { createProxyMiddleware } = require("http-proxy-middleware");
require("dotenv").config(); // Load environment variables from .env

module.exports = function (app) {
  const target = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  app.use(
    "/api",
    createProxyMiddleware({
      target,
      changeOrigin: true,
      pathRewrite: {
        "^/api": "", // Remove /api prefix before proxying
      },
      onProxyReq: (proxyReq, req) => {
        console.log(`Proxying request to: ${target}${req.url}`);
      },
    })
  );
};
