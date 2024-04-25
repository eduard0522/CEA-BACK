import { Router } from "express";
import { userRouter } from "./routes/users.routes.js";
import { routerLogin } from "./routes/login.routes.js";
import { routerForm } from "./routes/forms.routes.js";
import { asignacionesRouter } from "./routes/asignaciones.routes.js"


export const router = Router();

/**********   MANEJO DE RUTAS  ************/

// ENTRA AL LOGIN
router.use('/', routerLogin);

// ENTRA AL ROL DEPENDIENDO
router.use('/users',userRouter);

// ENTRA A LAS ASIGNACIONES
router.use('/Asignaciones', asignacionesRouter)

// ENTRA A LOS FORMULARIOS (INDEX)
router.use('/forms',routerForm, (req, res)=>{
    res.render("inspector/formularios3")
})


/* createLevels(nivelesRiesgo) */

