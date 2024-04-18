import {getUserForm,insertAnswer} from '../../services/forms/forms.js'

/************    MANEJA LA PETICION DE TRAER TODOS LOS FORMULARIOS ASOCIADOS A UN USUARIO *****************/

export async function getUserFormsController (req,res){
  try {
    const {user} = req.body;
    if(!user){
      return res.status(404).json({status:500, message:'El campo usuario no puede estar vacio.'})
    }
    const formUser = await getUserForm(user);
    if(!formUser)  {
      return res.status(400).json({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'})
    }
    return res.status(200).json({status:200 , data: formUser});
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'});
  }
}


/************************  MANEJA LA PETICIÓN EL PROGRESO DE LAS RESPUESTAS DEL USUARIO   ********************/

export async function insertAnswerController(req , res) {
  try {
      const {id_formulario,id_asignacion,id_pregunta,id_respuesta,id_usuario,estado} = req.body;
    
      if(!id_formulario || !id_asignacion || !id_pregunta   || !id_pregunta  || !id_usuario , !estado) {
        return res.status(404).json({status:404 , message :' No pueden haber campos vacios, verifica la información e intenta nuevamente.'});
      }

      const data = {id_formulario,id_asignacion,id_pregunta,id_respuesta,id_usuario,estado};

      const newAnswer = await  insertAnswer(data);

      if(!newAnswer){
        return res.status(500).json({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'});
      }

      return res.status(200).json({status:200 , data: newAnswer});
  } catch (error) {
      console.log(error);
      return res.status(400).json({status:500, message:'Ocurrio un error en el servidor, intente de nuevo mas tarde.'});
  }
};


