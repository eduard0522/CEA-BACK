import express from 'express';
import { config } from 'dotenv';
import { router } from './app.js';
import path, { resolve } from 'path';
import morgan from 'morgan';
import exphbs from 'express-handlebars'; // Importa express-handlebars para usar como motor de plantillas

// Inicializa la aplicación Express
const app = express();

// Configuración de middleware
app.use(express.json());
app.use(router);
app.use(express.static(path.join(path.resolve(), 'public')));
app.use(morgan('dev')); // 'dev' es una configuración predefinida que muestra los registros en formato corto


// Configuración de Handlebars como motor de plantillas
app.engine('hbs', exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(resolve(), 'views', 'layouts') }));
app.set('view engine', 'hbs');
app.set('views', path.join(resolve(), 'views'));

// Configuración de dotenv
config();

// Puerto
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`/***********  Servidor corriendo por el puerto: ${PORT}   ***************/`);
});
