import { Router } from "express";
import { createUserController, getAllUsersController, getCompaniesByUserIdController } from "../controllers/Users.js";
import { getFormatController } from "../controllers/forms/forms.js";
import { validateToken } from "../middlewares/Token.js";

export const userRouter = Router();

/****************  Solicitudes GET  ***************/
userRouter.get('/asignaciones' , (req,res) => {
  res.render('inspector/asignaciones')
});

userRouter.get('/formatos',(req,res) => {
  res.render('inspector/formularios')
})

/****************** Solicitudes POST  ************/
userRouter.post('/formatos' ,getFormatController)


/*****************  CREAR USUARIOS  *************/
userRouter.post('/', createUserController );
 
userRouter.post('/inicio/:id',validateToken, getCompaniesByUserIdController);

 userRouter.get('/inicio', (req,res) => {
  res.render('inspector/inicio');
}); 




