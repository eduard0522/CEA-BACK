import { createParams, getFormOrp, getTableReferencesOrp } from "../../services/forms/formORP.js";


/****************Envia la peticion para obtener los datos del fromulario ORP y organiza los datos mas estructuradamente *******************/

export async function  getFormOrpController(req,res) {

  try {
    const FormData = [];
    const getForm = await getFormOrp();

    if(!getForm){
      return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
    }
    const paramsORP = getForm.parametros_riesgo;
    const levelsORP = getForm.niveles_riesgo;

    /*****  Realiza un mapeo de los parametros, luego a cada parametro le agrega los niveles de riesgo correspondientes atraves del metodo filter  ******/
    paramsORP.forEach((param) => {

      const levelsXparam = levelsORP.filter(level => level.parametro_id == param.id);
      const resultDatos =  {
        parametro: param.parametro,
        niveles_riesgo: levelsXparam
      }
      FormData.push(resultDatos)
    })
    console.log(FormData[0]);
    // return res.status(200).json({Formulario:getForm.formulario[0].descripcion,datosFormulario:FormData});
    return res.render('inspector/formulario_VF',{
      allDates: FormData
      
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
  }
}

/******************** ENVVIA LA SOLICITUD PARA AL SERVICIO PARA OBTENER LA TABLA DE REFERENCIAS ORP ***********************************/


export async function getTableOrpController(req,res){

  try {
    const getTable = await getTableReferencesOrp();
    if(!getTable || !getTable === null){
      return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
    }
    
    return res.status(200).json({status:200, message: 'Valores de referencia formulario(ORP)', data:getTable})

  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
  }
}














/************************* ENVIA LA PETICION PARA INSERTAR  LOS PARAMETROS DE RIESGO  DEL FORMULARIO ORP  *******************/

export async function createParamsController(req,res){
  try {

    const {parametro,peso,descripcion} = req.body
    const data = {parametro,peso,descripcion}

    const createParam = await createParams(data);
    if(!createParam){
      return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
    }
    return res.status(200).json({status:200, data:createParam});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'})
  }
}


/*************************  ENVIA LA PETICION PARA  INSERTAR  LOS NIVELES DE RIESGO DE LOS PARAMETROS DEL FORMULARIO ORP  ***********************/

export async function createCriteriosController(req,res){
  try {
    const {parametro_id,nivel_riesgo,descripcion} = req.body
    const data = {parametro_id,nivel_riesgo,descripcion}

    const createCriterio = await createCriterios(data);
    if(!createCriterio){
      return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
    }
    return res.status(200).json({status:200, data:createCriterio});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'})
  }
}




