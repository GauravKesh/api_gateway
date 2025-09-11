import DotenvFlow from "dotenv-flow";
import jwt from "jsonwebtoken";

const { sign, verify } = jwt;

DotenvFlow.config();


const generateToken = (data) => {
    try {
        const payload = { data };
        const jwtToken = sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
        return jwtToken;
    } catch (err) {
        console.error("Error generating token:", err);
        throw err;
    }
};


const securityCheck = (token) => {
    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        return decoded;
    } catch (err) {
        console.error("Invalid or expired token:", err);
        throw new Error("Unauthorized");
    }
};

export { generateToken, securityCheck };
