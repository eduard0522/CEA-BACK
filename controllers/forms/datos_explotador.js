import { getAksAnswerById , getAsksStatus } from "../../services/forms/datosExplotador.js";

/**** ENVIA LA SOLICITUD A LOS SERVICIOS PARA OBTENER UNA PREGUNTA CON SUS POSIBLES RESPUESTAS  DE LA TABLA cirterios_datos_explotador ******/

export async function getAskAnswersByIdController (req,res){
  try {
    const {id} = req.params;
    if(!id) return res.status(404).json({message:' No pueden haber campos vacios, revisa la información e intenta nuevamente.'});

    const getAskAnswers = await getAksAnswerById(id);

    if(!getAskAnswers)   return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
    
    return res.status(200).json({status:200 , data:getAskAnswers});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
  }
}



/***************** OBTIENE TODAS LAS PREGUNTAS(SOLO ID) Y EL ESTADO DE ESTA PREGUNTA ********************/


export async function getAsksStatusController (req,res){
  try {
    const data = [];

    const {id} = req.params;
    if(!id) return res.status(404).json({message:' No pueden haber campos vacios, revisa la información e intenta nuevamente.'});

    const getAsks = await getAsksStatus(id);

    if(!getAsks)   return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
    
    const asksId = getAsks.id_pregunta;
    const statusList = getAsks.estado

    /************ RECORRE EL TOTAL DE LOS ID Y LES AGREGA EL ESTADO CORRESPONDIENTE A CADA UNO, SI NO SE AH RESPONDIDO RETORNA FALSO. */

    asksId.forEach(ask => {
      const statusAks = statusList.filter( status => status.id_pregunta === ask.id_criterio)

      const status = statusAks.length > 0 ? true : false;

      /************ AGRUPA EL ESTADO CON EL ID DE PREGUNTA CORRESPONDIENTE  *********/

      const dataGroup = {
        pregunta : ask,
        estado : status
      }
      console.log(dataGroup)

      /********** AGREGA EL DATA GROUP AL ARREGLO DATA  */

      data.push(dataGroup)
    });

    return res.status(200).json({status:200 , data:data});

  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
  }
}



