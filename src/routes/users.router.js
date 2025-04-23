const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.controller');


router.post('/register', usersCtrl.register);

module.exports = router;
