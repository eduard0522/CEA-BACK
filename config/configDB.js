import { config } from "dotenv";

config()

const configDB = {
  host:process.env.DB_HOST,
  database:process.env.BD_NAME ,
  user:process.env.DB_USER ,
  password:process.env.DB_PASS,
  port:process.env.DB_PORT 
}

export default configDB;

