
import { getConnection , releaseConnection } from "../../config/connectDB.js";


/*********************** OBTIENE LOS FORMULARIOS QUE TIENE ASIGNADOS LOS USUARIOS *******************************/


export async function getUserForm(user){
  try {
    const conn = await getConnection();
    const [getForms] = await conn.query('SELECT * FROM asignacion_formato_usuario WHERE id_usuario = ?' , [user]);

    if(!getForms){
      return null;
    }
    releaseConnection(conn)
    return getForms;
  } catch (error) {
    console.log(error)
    return null;
  }
}


/************************** ENVIA LAS RESPUESTAS DE CADA FORMULARIO REALIZADO POR EL USUARIO * ************************/

export async function insertAnswer(data) {
  try {
      if(!data){
        return null
      }
      const {id_formulario , id_asignacion , id_pregunta , id_respuesta,id_usuario , estado} = data

      const conn = await getConnection();

      const [insertAnswer] = await conn.query(' INSERT INTO progreso_respuestas (id_formulario,id_asignacion,id_pregunta,id_respuesta,id_usuario,estado) VALUES (?,?,?,?,?,?)',
      [id_formulario,id_asignacion,id_pregunta,id_respuesta,id_usuario,estado]);

      if(!insertAnswer) return null;

      releaseConnection(conn);

      return insertAnswer;
    
  } catch (error) {
    console.log(error);
    return null;
  }
};

/*****************************  trae el progreso de las respuestas de los usuarios      ****************************/



