'use strict'

import express from "express";
import logger from "./src/logging/logger.js";
import ROUTE from "./src/routes/routes.js";
import ConfigureProxy from "./src/proxy/ConfigureProxy.js";
import apiRateLimit from "./src/middleware/apiRateLimit.js";
import setupAuth from "./src/middleware/ksetupAuth.js";
import setupCreditCheck from "./src/middleware/checkCredit.js";

const app = express();
const PORT = 9090;


// rate limiting for client to protect DDOS attack;
app.use(apiRateLimit)

// pass the app as it'll be the entry for every request coming from client side better for logging 
logger(app);

//  validate request from the client
setupAuth(app,ROUTE);

// check credits

setupCreditCheck(app,ROUTE);

//  passing ROUTE to proxy configuration
ConfigureProxy(app,ROUTE);



/* Server  running */
app.listen(PORT,(req,res,next) => {
    console.log(`Server is running at port ${PORT}`);
})