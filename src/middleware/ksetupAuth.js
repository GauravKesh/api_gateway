import session from "express-session";
import DotenvFlow from "dotenv-flow";
import KeycloakConnect from "keycloak-connect";

DotenvFlow.config();

const setupAuth = (app, routes) => {
    const memoryStore = new session.MemoryStore();

    const keycloak = new KeycloakConnect(
        { store: memoryStore }, 
        {
            "realm": process.env.KEYCLOAK_REALM,
            "bearer-only": true,
            "auth-server-url": process.env.KEYCLOAK_AUTH_SERVER_URL,
            "ssl-required": "external",
            "resource": process.env.KEYCLOAK_CLIENT_ID,
            "credentials": {
                "secret": process.env.KEYCLOAK_CLIENT_SECRET,
            },
            "confidential-port": 0,
        }
    );

    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: true,
            store: memoryStore,
        })
    );

    app.use(keycloak.middleware());

    routes.forEach((r) => {
        if (r.auth) {
            app.use(r.url, keycloak.protect(), function (req, res, next) {
                next();
            });
        }
    });

    return keycloak; 
};

export default setupAuth;
