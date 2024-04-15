import { getAllUsers,getUserByUser} from "../services/Users.js";


/******************* Llama a la funcion ** getAllUses ** de los servicios para obtener todos los usuarios *********/

export async function getAllUsersController (req,res){
  try {
    const getUsers = await getAllUsers();

    if(getUsers === null){
      return res.json({status:500, message:'Ha ocurrido un error en el servidor.'});
    }

    return res.json({usuarios:getUsers})
  } catch (error) {
    return res.json({status:500 , message:'Ha ocurrido un error en el servidor.'});  }
}



/*********** Llama a la funcion   ** getUserById **   de los servicios para obtener usuario por nombre de usuario ********/


export async function getUserByUserController (usuario){
  try {
    if(!usuario){
      return {status:404 , message:"NOT FOUND"}
    }
    const getUser = await getUserByUser(usuario);

    if(getUser === null){
      return {status:500, message:'Este usuario no existe!!'}
    }
    return getUser

  } catch (error) {
    return {status:500 , message:'Ha ocurrido un error en el servidor.'};}
}