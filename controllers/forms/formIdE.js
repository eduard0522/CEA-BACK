import { releaseConnection } from "../../config/connectDB.js";
import  {getFormIdE, getParamsdE} from "../../services/forms/formIdE.js"
import { calificacionCriteriosIde } from "../../services/forms/formIdE.js";

/*********************  Obtener formulario IDE  ***********************/

export async function getFormIdEController(req,res) {
try {
    const criterioCalificación  = []
    const formData = await  getFormIdE();


    if(!formData){
      return res.status(500).json({status:500 ,  message:'Ha ocurrido un error en el servidor, intente de nuevo mas tarde.'});
    }
    const criterios =  formData.criterios;
    const calificaciones = formData.calificacion;
    /*****    Recorre los criterios y le agrega a cada criterio  sus calificaciones, retorna un arreglo con los datos organizados  **********/
        criterios.forEach(criterio => {
          const datos = calificaciones.filter(calificacion  => calificacion.id_criterio== criterio.id_criterio);

          const datosOrganizados = {
            criterio: criterio.descripcion,
            calificaciones: datos
          }
          criterioCalificación.push(datosOrganizados)
    });
   return res.status(200).json({Formulario:formData.formulario[0], datosFormulario:criterioCalificación});
} catch (error) {
  console.log(error)
  return res.status(500).json({status:500 ,  message:'Ha ocurrido un error en el servidor, intente de nuevo mas tarde.'});
}

}

/****************************   Solicita ta tabla de los valores de referencia del fromulario IdE ****************************/


export async function getParamIdeController(req,res) {
  try {
      const data = await getParamsdE()
      if(!data)  return res.status(500).json({status:500 ,  message:'Ha ocurrido un error en el servidor, intente de nuevo mas tarde.'});

      return res.status(200).json({status:200, Tabla_Metricas_IdE:data})
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 ,  message:'Ha ocurrido un error en el servidor, intente de nuevo mas tarde.'});
  }

}


/********************   Envia la solicitud para crear  nueva calificacion de criterio del formulario IdE  ******************/


export async function calificacionCriteriosIdeController (req,res){
  try {
    const{criterio_id,descripcion,valor} = req.body;
    const data = {criterio_id,descripcion,valor}

    const calificacionCriterio = await calificacionCriteriosIde(data);

    if(!calificacionCriterio){
      return res.status(400).jason({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'})
    }
    releaseConnection(conn);
    return calificacionCriterio;

  } catch (error) {
    console.log(error);
    return res.status(400).jason({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'});
  }
}