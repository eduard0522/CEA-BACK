const express = require('express');
const { config } = require('dotenv');

const cors = require('cors');
const path = require('path');

/***************** INICIA EL SERVIDOR ****************/
const app = express();
app.use(cors());
app.use(express.json());

// Configura Handlebars como motor de plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views')); // Especifica la ruta de las vistas


import('./app.js').then(({ router }) => {
  app.use(router);
}).catch(err => {
  console.log(">>> ERROR: ", err);
});

config();
const PORT = process.env.PORT || 3000; // Si el puerto no está definido en el archivo .env, usa el puerto 3000

app.listen(PORT, () => {
  console.log(`>>> Servidor corriendo por el puerto: ${PORT}`);
});
