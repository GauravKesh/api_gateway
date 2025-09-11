import express from "express";
import { loginController } from "../controller/login.controller.js";



const loginRoute = express();


loginRoute.get("/auth/login",loginController);

export {loginRoute};
