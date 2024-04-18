import jwt from 'jsonwebtoken';

const pass = process.env.SECRET_PASS;

export const generateToken = (date) => {
  const token =  jwt.sign(date,pass,{expiresIn:"8h"});
  return token
}

