import { getConnection, releaseConnection } from "../../config/connectDB.js";



/********************************* OBTIENE EL FORMULARIO ORP  *******************************/

export async function getFormOrp(){
  try {
    const conn = await getConnection();
    const[ getForm, getParams, getLevels] = await Promise.all([
      conn.query('SELECT * FROM formularios WHERE id_formulario = 2'),
      conn.query('SELECT * FROM parametros_f_orp WHERE id_formulario = 1'),
      conn.query('SELECT * FROM nieveles_riesgo_orp')
    ]);
    const data = { formulario:getForm[0], parametros_riesgo:getParams[0], niveles_riesgo: getLevels[0]}    
    releaseConnection(conn);
    console.log(data);
    return data

  } catch (error) {
    console.log(error);
    return null
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


