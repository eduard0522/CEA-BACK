import { config } from "dotenv";

config()

const configDB = {
  host:process.env.DB_HOST || 'localhost',
  database:process.env.DB_NAME || 'cea_encuestas',
  user:process.env.DB_USER || 'root',
  password:process.env.DB_PASS || '',
  port:process.env.DB_PORT || 3306,
}

export default configDB;

