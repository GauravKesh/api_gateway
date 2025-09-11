import pkg from "jsonwebtoken";
import { securityCheck } from "../security/securityCheck.js";
const { verify } = pkg;

const checkCredit = (req) => {
    return new Promise((resolve, reject) => {
        const data = req.data
        console.log("logged data:",data)

        try {
            if (data.credit  > 0) {
                resolve();
            } else {
                reject("Not sufficient Credit");
            }
        } catch (err) {
            reject("Invalid or expired token");
        }
    });
};

const setupCreditCheck = (app, routes) => {
    routes.forEach((r) => {
        if (r.creditCheck) {
            app.use(r.url, async (req, res, next) => {
                try {
                    await checkCredit(req);
                    next();
                } catch (error) {
                    res.status(403).send({ error });
                }
            });
        }
    });
};

export default setupCreditCheck;
