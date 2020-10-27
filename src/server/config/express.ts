import * as cookieParser from 'cookie-parser';
import express = require('express');
import * as helmet from 'helmet'; // Security
const historyApiFallback = require('connect-history-api-fallback');


const expressConfig = (app: express.Application) => {
    app.all('*', (req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    });

    app.use(helmet());
    app.use(cookieParser());

  // Fall back to /index.html if nothing else matches.
  app.use(historyApiFallback(null));

    return app;
};

export { expressConfig };
