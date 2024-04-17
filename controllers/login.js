import { getUserByUserController } from "./Users.js";
import { comparePass } from "../helpers/handleBycript.js";
import { generateToken } from "../helpers/handleJWT.js";

/***********************  Validacion de usuario   **************************/

export async function verifyDates(req, res) {
  try {
    const { correo, clave } = req.body;

    /**************** Devuelve el error si no vienen los datos solicitados  ************/

    if (!correo || !clave) {
      return res
        .status(400)
        .json({
          message:
            "No pueden haber campos vacios, verifica la información ingresada e intenta nuevamente.",
        });
    }
    const getUser = await getUserByUserController(correo);

    if (getUser.status === 500) {
      return res
        .status(500)
        .json({
          status: 500,
          message:
            "Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.",
        });
    } else if (getUser.status === 400) {
      return res
        .status(400)
        .json({
          status: 400,
          message:
            "Error de autenticación, usuario o clave incorrectas, verfica los datos e intenta nuevamente.",
        });
    } else {
      /*************  Compara la clave que viene del usuarion con la guardada en la base de datos   **************/
      const user = getUser[0];
      const verifyUser = await comparePass(clave, user.contrasenia);

      if (verifyUser) {
        const dates = { usuario: user.nombre, rol: user.rol };

        /*****************  GENERA UN TOKEN PARA ENVIARLE DE AUTENTICACIÓN AL USUARIO *********************/

        const token = generateToken(dates);

        return res
          .status(200)
          .json({ message: "Usuario verificado con exito! ", dates, token });
      }

      return res
        .status(400)
        .json({
          status: 400,
          message:
            "Error de autenticación, usuario o clave incorrectas, verfica los datos e intenta nuevamente.",
        });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({
        status: 500,
        message:
          "Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.",
      });
  }
}
