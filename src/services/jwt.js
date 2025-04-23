// src/services/jwt.js
const jwt = require('jsonwebtoken');
const EXPIRATION = '1h'; // ajusta según necesitas

function signToken(userId) {
  return jwt.sign({ sub: userId }, process.env.JWT_SECRET, {
    expiresIn: EXPIRATION
  });
}

module.exports = { signToken };
