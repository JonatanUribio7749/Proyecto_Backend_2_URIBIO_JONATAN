// src/config/passport.js
const passport      = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy   = require('passport-jwt').Strategy;
const { ExtractJwt }= require('passport-jwt');
const bcrypt        = require('bcrypt');
const User          = require('../models/user.model');

// Estrategia "login" con correo+pass
passport.use('login', new LocalStrategy(
  { usernameField: 'email', passwordField: 'password' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) return done(null, false, { message: 'Usuario no existe' });

      const valid = bcrypt.compareSync(password, user.password);
      if (!valid) return done(null, false, { message: 'Contraseña inválida' });

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Extractor de JWT desde cookie
const cookieExtractor = req => {
  return req && req.cookies
    ? req.cookies[process.env.JWT_COOKIE_NAME]
    : null;
};

// Estrategia "current" JWT
passport.use('current', new JwtStrategy(
  {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey:    process.env.JWT_SECRET
  },
  async (payload, done) => {
    try {
      const user = await User.findById(payload.sub).select('-password');
      if (!user) return done(null, false, { message: 'Token inválido' });
      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  }
));
