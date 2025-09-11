import { generateToken } from "../../src/security/securityCheck.js";

const loginController = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.query)
    try {

        if (!username || !password) {
            return res.status(403).send("username and password are required");
        }

        if (username === "test" && password === "test") {
            const data = {
                credit: 5,
                username,
                validity: "Yes",
            };

            const jwtToken = generateToken(data);

            return res
                .cookie("token", jwtToken, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                })
                .send({ token: jwtToken });
        }

        return res.status(401).send("Invalid credentials");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
};

export { loginController };
