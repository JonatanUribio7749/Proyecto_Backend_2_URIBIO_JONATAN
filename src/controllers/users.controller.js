// src/controllers/users.controller.js
const User = require('../models/user.model');

exports.register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    // 1) Verificar si ya existe
    const exists = await User.findOne({ email });
    if (exists) {
      return res
        .status(400)
        .json({ status: 'error', message: 'El email ya está registrado' });
    }
    // 2) Crear y guardar (bcrypt se aplica en el pre('save'))
    const user = new User({ first_name, last_name, email, age, password });
    await user.save();

    return res
      .status(201)
      .json({ status: 'success', payload: { id: user._id, email: user.email } });
  } catch (err) {
    next(err);
  }
};
