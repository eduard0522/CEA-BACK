
import { getConnection, releaseConnection } from "../config/connectDB.js"


/************************  OBTIENE TODOS LOS USUARIOS DE LA BASE DE DATOS *******************/
export async function getAllUsers () {
  try {
    const conn = await getConnection();
    const [getUsers] = await  conn.query('SELECT * FROM usuarios');
    
    if(getUsers.length == 0){
      return null
    } else{
      releaseConnection(conn);
      return getUsers;
    }
  } catch (error) { 
    console.log(error);
    return  null
  }
}


/********************* OBTIENE EL USUARIO POR CORREO *******************/

export async function getUserByUser (correo) {
  try {
    const conn = await getConnection();

    const [getUser] = await  conn.query('SELECT * FROM usuarios WHERE correo = ?',[correo]);
    
    if(getUser.length == 0){
      return null
    } 
    releaseConnection(conn);
    return getUser;
  } catch (error) { 
    console.log(error);
    return  null
  }
}