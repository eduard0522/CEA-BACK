import { config } from "dotenv";

config()

const configDB = {
<<<<<<< HEAD
  host:process.env.DB_HOST || 'localhost',
  database:process.env.DB_NAME || 'cea_encuestas',
  user:process.env.DB_USER || 'root',
  password:process.env.DB_PASS || '',
  port:process.env.DB_PORT || 3306,
=======
  host:process.env.DB_HOST,
  database:process.env.BD_NAME ,
  user:process.env.DB_USER ,
  password:process.env.DB_PASS,
  port:process.env.DB_PORT 
>>>>>>> 6a761db6add6eadf99459f6e727913a63c4bc259
}


console.log(configDB);
export default configDB;

