import DotenvFlow from "dotenv-flow";
import jwt from "jsonwebtoken";

DotenvFlow.config();

const jwtAuth = (req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.data = decoded.data;
        next();
    } catch (err) {
        console.error("JWT validation failed:", err.message);
        return res.status(401).json({ error: "Invalid or expired token" });
    }
};

const setupAuth = (app, routes) => {
    routes.forEach((r) => {
        if (r.auth) {
            app.use(r.url, jwtAuth, (req, res, next) => {
                next();
            });
        }
    });
};

export default setupAuth;
