import { Router } from "express";
import { userRouter } from "./routes/users.routes.js";
import { routerLogin } from "./routes/login.routes.js";
import { routerForm } from "./routes/forms.routes.js";


export const router = Router();

/**********   MANEJO DE RUTAS  ************/

router.use('/', routerLogin);
router.use('/users',userRouter);
router.use('/forms',routerForm)


/* createLevels(nivelesRiesgo) */

