import { Router } from "express";
import Handlebars from 'handlebars';
import{verifyDates} from "../controllers/login.js"

export const routerLogin = Router();

routerLogin.get("/", verifyDates);
/***************  VALIDACION DE AUTENTICIDAD DE USUARIO  ***************/
routerLogin.post("/", verifyDates);
