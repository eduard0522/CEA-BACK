import { Router } from "express";
import { verifyDates } from "../controllers/login.js";

export const routerLogin = Router();

routerLogin.get('/', (req, res) => {
    res.render('index'); // Renderiza la vista login.hbs
});

/*************** VALIDACION DE AUTENTICIDAD DE USUARIO ***************/
routerLogin.post("/", verifyDates);
