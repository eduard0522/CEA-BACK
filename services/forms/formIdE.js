import { getConnection, releaseConnection } from "../../config/connectDB.js";


/***********************  Realiza la petición a la base de datos de los datos necesarios para el formulario IdE  ********************/

export async function getFormIdE(){
  try {
    const conn = await getConnection();
    const[ getForm, getCriterios, getCalificacion] = await Promise.all([
      conn.query('SELECT * FROM formularios WHERE id_formulario = 1'),
      conn.query('SELECT * FROM crierios_f_ide WHERE id_formulario = 1'),
      conn.query('SELECT * FROM calificacion_criterios_ide ')
    ]);
    const data = { formulario:getForm[0], criterios:getCriterios[0], calificacion: getCalificacion[0]}    
    releaseConnection(conn);

    return data

  } catch (error) {
    console.log(error);
    return null
  }
}


/************************ Realiza la petición de las metricas del formulario IdE a la base de datos ********************/

export async function getParamsdE(){
  try {
    const conn = await getConnection();
    const [data] = await conn.query('SELECT * FROM valores_referencia_ide');
    if(!data){
      return null
    }
    releaseConnection(conn);
    return data
  } catch (error) {
    console.log(error);
    return null
  }
}

/********************   Crea una nueva calificacion de criterio del formulario IdE ****************/




export async function calificacionCriteriosIde(data) {
  try {
    const{criterio_id,descripcion,valor} = data;

    const conn =  await getConnection();
    const nuevaCalificacion = await conn.query('INSERT INTO calificacion_criterios_ide(id_criterio,descripcion,valor) VALUES (?,?,?)',[criterio_id,descripcion,valor]);

    if(!nuevaCalificacion){
      return null
    }

    releaseConnection(conn);
    return nuevaCalificacion;
    
  } catch (error) {
    console.log(error)
    return null
  }
}






