import jwt from 'jsonwebtoken';

const pass = process.env.SECRET_PASS;

export const validateToken = (req,res,next) => {
 /*  const accesToken  = req.headers['authorization'];
 */
  const {token} = req.body;

  if(!token) return res.status(404).json({mesage:'Acceso denegado, no tienes autorización para esta sesión.'})
  jwt.verify(token,pass,(err,user) => {

    if(err){
      return res.status(404).json({status:404, message:'Acceso denegado, token expirado o incorrecto.' })
    }else{
      next();
    }
  })
}