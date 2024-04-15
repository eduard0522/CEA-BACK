import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { getConnection } from "../config/connectDB.js";
import { getAllUsersController } from "../controllers/Users.js";
import { encrypt } from "../helpers/handleBycript.js";
import { validateToken } from "../helpers/handleJWT.js";

export const userRouter = Router();


/****************  Solicitudes GET  ***************/

userRouter.get('/' ,validateToken,getAllUsersController);

/****************** Solicitudes POST  ************/


userRouter.post('/',async  (req,res) => {
  try {
    const conn = await getConnection();

    const{id,nombre,usuario,correo,contrasenia,rol} =req.body;

     const encryptPass = await encrypt(contrasenia);

    const [createUser] = await conn.query(' INSERT INTO usuarios(id,nombre,usuario,correo,contrasenia,rol) VALUES(?,?,?,?,?,?)',[id,nombre,usuario,correo,encryptPass,rol]);

    if(createUser){
      console.log(createUser);
      return res.send('Usuario creado')
    }
    
  } catch (error) {
    console.log(error)
    return null;
  }
})


