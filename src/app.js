// src/app.js
require('dotenv').config();             // Carga variables de entorno
const express      = require('express');
const cookieParser = require('cookie-parser');
const passport     = require('passport');

// Conexión a MongoDB y configuración de Passport
require('./config/db')();
require('./config/passport');

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/users', require('./routes/users.router'));
app.use('/api/sessions', require('./routes/sessions.router'));

// Manejo básico de errores (opcional, pero recomendado)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Error interno del servidor'
  });
});

module.exports = app;
