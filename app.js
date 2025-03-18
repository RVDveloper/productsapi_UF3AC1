require('dotenv').config(); // Carga variables de entorno desde el archivo .env

const express = require('express');
const products_routes = require('./routes/products.js');

// Server instantiation
const app = express();

// Server configuration: template engine
app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('/views'));

// Middleware
app.use(express.json());
app.use('/', products_routes);

// Obtener el puerto desde el archivo .env o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// Server startup
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

