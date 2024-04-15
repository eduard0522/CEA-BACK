import bcrypt from "bcryptjs";

/****************** Encripta la contraseña al momento del reistro   ****************/

const encrypt = async (passPlain) => {
  const hash = await bcrypt.hash(passPlain,10);
  return hash;
} 

/***************   Compara la contraseña enviada con la guardada al momento del login  *************/

const comparePass = async (passPlain , hashPassword) => {
  return await bcrypt.compare(passPlain,hashPassword);
}


/************  Exporta las funciones **********/
export{
  encrypt,comparePass
}