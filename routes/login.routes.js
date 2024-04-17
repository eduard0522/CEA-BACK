import { Router } from "express";
import{verifyDates} from "../controllers/login.js"
export const routerLogin = Router();


routerLogin.get('/', (req, res)=>{
    res.send("login de inicio")
})


/***************  VALIDACION DE AUTENTICIDAD DE USUARIO  ***************/
routerLogin.post("/", verifyDates);