import { Router } from "express";
import { getFormIdEController, getParamIdeController } from "../controllers/forms/formIdE.js";
import { getFormOrpController, getTableOrpController } from "../controllers/forms/formORP.js";
import {getUserFormsController, insertAnswerController } from '../controllers/forms/forms.js'

export const routerForm = Router();

/************** RUTAS FORMULARIO IDE   ***************/


/*************  obtiene el formulario ORP , junto a sus parametros y posibles respuestas **********/
routerForm.get('/orp', getFormOrpController);


/*************  obtiene el formulario ide, junto a sus parametros y posibles respuestas   *********/
routerForm.get('/ide', getFormIdEController)

/*************  obtiene los valores de referencia del formulario ide ********************/
routerForm.get('/ide/values',getParamIdeController);

/*************  obtiene los valores de referencia del formulario ORP ********************/
routerForm.get('/orp/values',getTableOrpController);

/***********  OBTIENE LOS FORMULARIOS ASIGNADOS AL USUARIO  ************/
routerForm.get('/user' , getUserFormsController );

/******************  INSERTA LA RESPUESTA DEL USUARIO Y ACTUALIZA SU ESTADO  *******************************/
routerForm.post('/answer' , insertAnswerController);
