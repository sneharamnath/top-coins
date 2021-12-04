const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors"); 

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://pro-api.coinmarketcap.com/v1/',
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
              }
        }),
        cors()
    );
};
