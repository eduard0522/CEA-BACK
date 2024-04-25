
/****************Envia la peticion para obtener los datos del fromulario ORP y organiza los datos mas estructuradamente *******************/

export async function  getAsignacionesController(req,res) {

  try {
        return res.render('inspector/asignaciones2')
     
  } catch (error) {
    console.log(error);
    return res.status(500).json({status:500, message:'Ha ocurrido un error en el servidor, intenta de nuevo mas tarde.'});
  }
}








