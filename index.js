import express from 'express';
import { config  } from 'dotenv';
import { router } from './app.js';

/*****************   INICIA EL SERVIDOR ****************/
const app = express();
app.use(express.json());
app.use(router);

config()

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`/***********  Servidor corriendo por el puerto ${PORT}   ***************/`);
});

