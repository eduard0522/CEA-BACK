import { Router } from "express";
import { getFormIdEController, getParamIdeController,getAnswerFormIdeController } from "../controllers/forms/formIdE.js";
import { getFormOrpController, getTableOrpController,getAnswerFormOrpController,getParamsStatusController } from "../controllers/forms/formORP.js";
import {getUserFormsController, insertAnswerController } from '../controllers/forms/forms.js'
import { getAskAnswersByIdController, getAsksStatusController } from "../controllers/forms/datos_explotador.js";
export const routerForm = Router();

                              /************** RUTAS FORMULARIO ORP  ***************/


/*************  obtiene el formulario ORP , junto a sus parametros y posibles respuestas **********/
routerForm.get('/orp', getFormOrpController);

/************* obtiene una pregunta especifica del formulario ORP con sus posibles respuestas y estado de la respuesta  **************/
routerForm.get('/orp/ask/:id' , getAnswerFormOrpController)

/*****************  RECIBE EL ID DE LA ASIGNACION Y DEVUELVE EL ESTADO DE LAS PREGUNTAS DE ESTE FORMULARIO PARA ESA ASIGANACION  ****************/
routerForm.get('/orp/status/:idAsignacion/:idPregunta',getParamsStatusController);

/*************  obtiene los valores de referencia del formulario ORP ********************/
routerForm.get('/orp/values',getTableOrpController);



                              /************** RUTAS FORMULARIO IDE ***************/


/*************  obtiene el formulario ide, junto a sus parametros y posibles respuestas   *********/

routerForm.get('/ide', getFormIdEController)

/************* obtiene una pregunta especifica del formulario IDE con sus posibles respuestas y estado de la respuesta  **************/
routerForm.get('/ide/ask/:id' , getAnswerFormIdeController)


/*************  obtiene los valores de referencia del formulario ide ********************/
routerForm.get('/ide/values',getParamIdeController);



                        /************************** FORMULARIO DATOS EXPLOTADOR  ************************/

/**********  OBTIENE EL TOTAL DE LAS PREGUNTAS CON SU ESTADO  ****************/
routerForm.get('/dee/status/:idAsignacion/:idPregunta' , getAsksStatusController);



/******* DEVUELVE UNA PREGUNTA CON SUS POSIBLES RESPUESTAS POR MEDIO DEL ID DE LA PREGUNTA  ******/

routerForm.get('/dee/ask/:id' , getAskAnswersByIdController);


                     /******************   ESTADO DE LAS PREGUNTAS ***********************/

/******************  INSERTA LA RESPUESTA DEL USUARIO Y ACTUALIZA SU ESTADO  *******************************/
routerForm.post('/answer' , insertAnswerController);

                          /*********************  ASIGNACION DE FROMULARIOS   ******************/

/***********  OBTIENE LOS FORMULARIOS ASIGNADOS AL USUARIO  ************/
routerForm.get('/user' , getUserFormsController );





/*************************** PRUEBAS DE DESARROLLO  // BORRAR \\ *****************/

routerForm.get('/index' , (req,res) => {
  return res.render('inspector/prueba')
})



routerForm.get('/index/2' , (req,res) => {
  return res.render('inspector/formulario_VF')
})