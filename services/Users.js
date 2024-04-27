
import { query } from "express";
import { getConnection, releaseConnection } from "../config/connectDB.js"

/*********************  CREAR USUARIOS  ******************/

export async function CreateUser(data) {
  try {
    const conn = await getConnection();

    const{uuid,nombre,correo,encryptPass,rol} = data

    const[newUser] = await conn.query('INSERT INTO usuarios (id,nombre,correo,contrasenia, rol) VALUES( ?,?,?,?,?)',
    [uuid,nombre,correo,encryptPass,rol]);
    
     if(!newUser) return null;

     releaseConnection(conn);
     return newUser;
  } catch (error) {
    console.log(error);
    return null;
  }
}



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

export async function getUserByCorreo (correo) {
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


export async function  getCompaniesUser(idUser)  {
  try {
    if(!idUser) return null;
    console.log(idUser)
    const conn = await getConnection();

    const getCompanys = await  conn.query('SELECT * FROM empresaxusuario WHERE id_usuario = ?',[idUser]);
  
    if( !getCompanys) return null;
     
    const companies =   getCompanys[0];

    const companiesDates = [];

    for( const companie of companies ){
     const [getDatesCompanies] = await conn.query('SELECT * FROM empresas WHERE id_empresa = ?' , [ companie.id_empresa]);
      companiesDates.push(getDatesCompanies);
    }

    const dataUser = {Asignaciones: getCompanys[0] , Empresas: companiesDates[0] }
    
    releaseConnection(conn);
    return  dataUser;

  } catch (error) {
    console.log(error ,' /**********  services user ***********/');
    return null;
  }
}