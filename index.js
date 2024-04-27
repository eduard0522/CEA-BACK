import express from 'express';
import { config } from 'dotenv';
import { router } from './app.js';
import path, { resolve } from 'path';
import exphbs from 'express-handlebars'; // Importa express-handlebars para usar como motor de plantillas
import morgan from 'morgan';

// Inicializa la aplicación Express
const app = express();
// Configuración de middleware
app.use(express.json());
app.use(morgan('dev'))
app.use(router);
app.use(express.static(path.join(path.resolve(), 'public')));

// Configuración de Handlebars como motor de plantillas
app.engine('hbs',
 exphbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(resolve(), 'views', 'layouts'),partialsDir: path.join(resolve() , 'views/partials')}
));
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
