
import { getConnection, releaseConnection } from "../../config/connectDB.js";


/***************** OBTIENE TODAS LAS PREGUNTAS(SOLO ID) Y EL ESTADO DE ESTA PREGUNTA ********************/

export async function getAsksStatus(idAsignacion) {
  try {
    if(!idAsignacion) return null;
    const conn = await getConnection();

    const [ getAsks, getStatus ] = await Promise.all([
      conn.query('SELECT id_criterio FROM criterios_datos_explotador'),
      conn.query(' SELECT * FROM progreso_respuestas WHERE id_formulario = 3 and  id_asignacion  = ? ', [idAsignacion])
    ]) ;
  
    releaseConnection(conn);
    if( !getAsks || !getStatus) return null;

    const data = { id_pregunta: getAsks[0] , estado: getStatus[0]}
    return  data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/************   OBTIENE DE  LA BASE DE DATOS UNA PREGUNTA CON SUS POSIBLES RESPUESTAS  DE LA TABLA cirterios_datos_explotador *************/

export async function getAksAnswerById(idPregunta) {
  try {
    if(!idPregunta) return null;
    const conn = await getConnection();

    const [ getAsk, getAnswers ] = await Promise.all([
      conn.query('SELECT * FROM criterios_datos_explotador WHERE id_criterio = ?' ,[idPregunta]),
      conn.query(' SELECT * FROM cantidad_criterios_explotador WHERE id_criterio = ?', [idPregunta])
    ]) ;
  
    releaseConnection(conn);
    if( !getAsk || !getAnswers) return null;

    return {pregunta :getAsk[0] , respuestas : getAnswers[0]};
  } catch (error) {
    console.log(error);
    return null;
  }
}