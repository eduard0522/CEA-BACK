import { Router } from "express";
import { createUserController, getAllUsersController } from "../controllers/Users.js";
import { validateToken } from "../middlewares/Token.js";

export const userRouter = Router();

/****************  Solicitudes GET  ***************/

userRouter.get('/' ,validateToken,getAllUsersController);

/****************** Solicitudes POST  ************/

 /*****************  CREAR USUARIOS  *************/
userRouter.post('/', createUserController );
 
