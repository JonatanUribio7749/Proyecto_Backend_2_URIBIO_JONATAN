require('dotenv').config();             
const express      = require('express');
const cookieParser = require('cookie-parser');
const passport     = require('passport');

require('./config/db')();
require('./config/passport');

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Rutas
app.use('/api/users', require('./routes/users.router'));
app.use('/api/sessions', require('./routes/sessions.router'));


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    status: 'error',
    message: err.message || 'Error interno del servidor'
  });
});

module.exports = app;
