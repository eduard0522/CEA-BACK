import { Router } from "express";
import { getFormIdEController, getParamIdeController } from "../controllers/forms/formIdE.js";
import { getFormOrpController, getTableOrpController } from "../controllers/forms/formORP.js";

export const routerForm = Router();

/**************           RUTAS FORMULARIO IDE   ***************/

/*************  obtiene el formulario ide, junto a sus parametros y posibles respuestas   *********/
routerForm.get('/ide', getFormIdEController)
/*************  obtiene los valores de referencia del formulario ide ********************/
routerForm.get('/ide/values',getParamIdeController);

/*************  obtiene el formulario ORP , junto a sus parametros y posibles respuestas **********/
routerForm.get('/orp', getFormOrpController);
/*************  obtiene los valores de referencia del formulario ORP ********************/
routerForm.get('/orp/values',getTableOrpController);


