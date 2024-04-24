import { getConnection, releaseConnection } from "../../config/connectDB.js";



/********************************* OBTIENE EL FORMULARIO ORP  *******************************/

export async function getFormOrp(){
  try {
    const conn = await getConnection();
    const[ getForm, getParams, getLevels,getResponseProgress] = await Promise.all([
      conn.query('SELECT * FROM formularios WHERE id_formulario = 2'),
      conn.query('SELECT * FROM parametros_f_orp WHERE id_formulario = 2'),
      conn.query('SELECT * FROM nieveles_riesgo_orp'),
      conn.query('SELECT id_pregunta , id_respuesta, estado FROM progreso_respuestas WHERE id_asignacion = 1 and id_formulario = 2')
    ]);
    const data = { formulario:getForm[0], parametros_riesgo:getParams[0], niveles_riesgo: getLevels[0], Estado : getResponseProgress[0] }    
    releaseConnection(conn);
    return data

  } catch (error) {
    console.log(error);
    return null
  }
}

/********************************   OBTIENE UNA PREGUNTA ESPECIFICA DEL FROMULARIO CON SUS ATRIBUTOS POR ID de pregunta  ****************************/

export async function getAnswer(idPregunta) {
  
  try {
    if(!idPregunta ) return null
    const conn = await getConnection();

    const[  getParam, getLevels] = await Promise.all([
      conn.query('SELECT * FROM parametros_f_orp WHERE id_formulario = 2 and id = ?',[idPregunta]),
      conn.query('SELECT * FROM nieveles_riesgo_orp WHERE parametro_id = ?',[idPregunta])

    ]);

    if(!getParam) return null
   
    const data = { Parametro:getParam[0], niveles_riesgo: getLevels[0]}    
    releaseConnection(conn);

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}

/********************************   OBTIENE TODOS LOS  ID DE LOS PARAMETROS Y SU ESTADO DE PROGRESO POR ID de asignación, y una pregunat especifica por ID ****************************/

export async function getParamsStatus(idAsignacion,idPregunta) {
  
  try {
    if( !idAsignacion || !idPregunta) return null
    const conn = await getConnection();

    const[  getParams,getResponseProgress,getParam, getLevels] = await Promise.all([
      conn.query('SELECT id FROM parametros_f_orp '),
      conn.query('SELECT  id_pregunta,estado FROM progreso_respuestas WHERE id_asignacion = ? and id_formulario = 2',[idAsignacion]),
      conn.query('SELECT * FROM parametros_f_orp WHERE id_formulario = 2 and id = ?',[idPregunta]),
      conn.query('SELECT * FROM nieveles_riesgo_orp WHERE parametro_id = ?',[idPregunta])
    ]);

    if( !getParams || !getResponseProgress || !getParam || !getLevels) return null
   
    const data = { Parametros:getParams[0],Estado:getResponseProgress[0] , Parametro:getParam[0] , Niveles: getLevels[0]}    
    releaseConnection(conn);

    return data;

  } catch (error) {
    console.log(error);
    return null;
  }
}



/******************************* OBTIENE LA TABLA DE REFERENCIA  DEL FORMULARIO ORP  ********************/
export  async function getTableReferencesOrp() {
  try {
    const conn = await getConnection()
    const [getTable] = await conn.query('SELECT * FROM valores_referencia_orp');

    if(!getTable){
      return null
    }
    releaseConnection(conn)
    return getTable 
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*************************  INSERTA  LOS PARAMETROS DE RIESGO  DEL FORMULARIO ORP  *******************/

export async function createParams(data) {
  try {
    const conn = await getConnection();
    const { parametro, peso_parametro, formulario_id } = data;

    const [insertData] = await conn.query(
      "INSERT INTO parametros_f_orp(parametro,peso,id_formulario) VALUES (?,?,?)",
      [parametro, peso_parametro, formulario_id]
    );

    if(!insertData){
      return null;
    }
    releaseConnection(conn);
    return insertData;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/*************************  INSERTA LOS NIVELES DE RIESGO DE LOS PARAMETROS DEL FORMULARIO ORP  *******************/

export async function createlevel(data) {
  try {
    const conn = await getConnection();
    const { parametro_id, nivel_riesgo, descripcion } = data;

    const [insertData] = await conn.query(
      "INSERT INTO nieveles_riesgo_orp(parametro_id,nivel_riesgo,descripcion) VALUES (?,?,?)",
      [parametro_id, nivel_riesgo, descripcion]
    );

    if(!insertData){
      return null;
    }
    releaseConnection(conn);
    return insertData;
  } catch (error) {
    console.log(error);
    return null;
  }
}


