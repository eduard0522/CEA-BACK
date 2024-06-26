import { Router } from "express";
import { createUserController, getAllUsersController } from "../controllers/Users.js";
import { validateToken } from "../middlewares/Token.js";

export const userRouter = Router();

/****************  Solicitudes GET  ***************/

userRouter.get('/validate-user' ,validateToken,getAllUsersController);

/****************** Solicitudes POST  ************/

 /*****************  CREAR USUARIOS  *************/
userRouter.post('/', createUserController );


// ENTRA AL PERFIL INSPECTOR (INDEX)
userRouter.get('/user-inspector', (req, res)=>{
    res.render('inspector/inicio1')
})
 
