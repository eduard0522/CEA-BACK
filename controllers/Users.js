import { CreateUser, getAllUsers} from "../services/Users.js";
import { v4 as uuidV4 } from "uuid";
import { encrypt } from "../helpers/handleBycript.js";



/********************** MANEJA LA PETICION PARA CREAR UN NUEVO USUARIO  **************/

export async function createUserController (req,res) {
  try {
    const { nombre , correo , contrasenia, rol } = req.body;

    if(!nombre || !correo || !contrasenia || !rol) {
      return res.status(404).json({status:404 , message : 'No pueden quedar campos vacios, verifica la información e intente de nuevo.'})
    }

    // CREA UN ID SEGURO PARA CADA USUARIO

    const uuid = uuidV4();
    // ENCRIPTA LA CONTRASEÑA DEL USUARIO

    const encryptPass = await encrypt(contrasenia);

    // ENVIA LA PETICIÓN AL SERVICIO PARA QUE SE COMUNIQUE CON LA BASE DE DATOS.

    const data = { uuid, nombre , correo , encryptPass , rol};
    const newUser = await CreateUser(data);

    if(!newUser){
      return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'})
    }

    return res.status(200).json({status:200 , message:'Usuario creado con éxito.'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500 , message: 'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'})
  }
}

/******************* Llama a la funcion ** getAllUses ** de los servicios para obtener todos los usuarios *********/

export async function getAllUsersController (req,res){
  try {
    const getUsers = await getAllUsers();

    if(getUsers === null){
      return res.json({status:500, message:'Ha ocurrido un error inesperado, intente de nuevo mas tarde.'});
    }

    return res.json({usuarios:getUsers})
  } catch (error) {
    return res.json({status:500 , message:'Ha ocurrido un error en el servidor.'});  }
}
