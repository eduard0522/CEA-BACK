// Modulo de mysql2 c

import mysql2 from 'mysql2/promise';
import configDB from "./configDB.js";

let pool = null;

//  Crea el pool de conexion a la base de datos;

async function initializePool() {
  if (!pool) {
    pool = mysql2.createPool(configDB);
    console.log('Conjunto de conexiones inicializado');
  }
}
// Llama la funcion de crear la conexion  y la devuelve si todo esta correcto.

export async function getConnection() {
  await initializePool();
  try {
    const conn = await pool.getConnection();
    console.log('Se obtuvo una conexión del conjunto');
    return conn;
  } catch (error) {
    console.error('Error al obtener una conexión del conjunto:', error);
    return null;
  }
}

// Libera la Conexion a la base de datos

export async function releaseConnection(conn) {
  if (conn) {
    try {
      await conn.release();
      console.log('Se liberó la conexión y se devolvió al conjunto');
    } catch (error) {
      console.error('Error al liberar la conexión:', error);
    }
  }
}

