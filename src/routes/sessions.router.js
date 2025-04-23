// src/routes/sessions.router.js
const express  = require('express');
const passport = require('passport');
const ctrl     = require('../controllers/sessions.controller');
const router   = express.Router();

// POST /api/sessions/login
router.post('/login', ctrl.login);

// GET /api/sessions/current
router.get(
  '/current',
  passport.authenticate('current', { session: false }),
  ctrl.current
);

module.exports = router;
