import { Router } from "express";
import{verifyDates} from "../controllers/login.js"

export const routerLogin = Router();

/***************  VALIDACION DE AUTENTICIDAD DE USUARIO  ***************/
routerLogin.post("/", verifyDates);