import { createParams, getFormOrp, getTableReferencesOrp,getAnswer, getParamsStatus } from "../../services/forms/formORP.js";


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
    const statusAnswers = getForm.Estado;

    /*****  Realiza un mapeo de los parametros, luego a cada parametro le agrega los niveles de riesgo correspondientes atraves del metodo filter  ******/
    paramsORP.forEach((param) => {

      const levelsXparam = levelsORP.filter(level => level.parametro_id == param.id);
      const statusxparam =  statusAnswers.filter(asnwers =>  asnwers.id_pregunta === param.id);
      const resultDatos =  {
        parametro: param.parametro,
        niveles_riesgo: levelsXparam,
        estado:statusxparam
      }
      FormData.push(resultDatos)
    })
    console.log(FormData[0]);
   /*  return res.status(200).json({Formulario:getForm.formulario[0].descripcion,datosFormulario:FormData}); */
   return res.render('inspector/formulario_VF',{
      FormData
    }) 


  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
  }
}



/******************** OBTIENE UNA PREGUNTA ESPECIFICA DEL FORMULARIO ORP,CON SUS POSIBLES RESPUESTAS, SUS VALORES Y EL ESTADO DE LA RESPUESTA *******/

export async function getAnswerFormOrpController (req,res){

  try {
      const {id}  = req.params;
      if(!id ){
        return res.status(404).json({status:404 , message : 'No pueden haber campos vacios, verifica la información e intenta nuevamente.'});
      }
      const answer = await getAnswer(id);


      if(!answer) return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});

      return res.status(200).json({data:answer})

  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
  }
}


/******************** OBTIENE  TODAS LAS PREGUNTAS(ID) DEL FORMULARIO ORP Y EL ESTADO DE LA RESPUESTA *******/

export async function getParamsStatusController (req,res){
  try {
    const data = [];
      const {idAsignacion,idPregunta}  = req.params;
      if(!idAsignacion || !idPregunta){
        return res.status(404).json({status:404 , message : 'No pueden haber campos vacios, verifica la información e intenta nuevamente.'});
      }
      const paramStatus = await getParamsStatus(idAsignacion,idPregunta);


      if(!paramStatus) return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});

      const params = paramStatus.Parametros;
      const status = paramStatus.Estado;
      const param = paramStatus.Parametro[0];
      const level = paramStatus.Niveles;

      params.forEach((param) => {
        const statusXparam =  status.filter(status => status.id_pregunta === param.id);

        const estado = statusXparam.length > 0 ? true : false;

        const dataGroup  = {
          parametro: param,
          estado
        }
        data.push(dataGroup);
      })
     /* return res.status(200).json({data,param,level})   */

        console.log(level)
         res.render('inspector/formulario_VF.hbs', {
          data,param,level
         }); 
      
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
  }
}


/******************** ENVIA LA SOLICITUD PARA AL SERVICIO PARA OBTENER LA TABLA DE REFERENCIAS ORP ***********************************/


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




