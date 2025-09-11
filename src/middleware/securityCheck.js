// import KeycloakConnect from "keycloak-connect";

import DotenvFlow from "dotenv-flow";
import { sign} from "jsonwebtoken";

DotenvFlow.config();

const securityCheck = (data)=>{
    const secret = process.env.JWT_SECRET

    
}

