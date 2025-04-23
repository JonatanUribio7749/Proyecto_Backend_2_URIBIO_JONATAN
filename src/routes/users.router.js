// src/routes/users.router.js
const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.controller');

// POST /api/users/register
router.post('/register', usersCtrl.register);

module.exports = router;
