const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const token = require('jsonwebtoken');
const config=require('../config/config.json');
const User = require('../database/user');

//GERAR TOKEN DE USER
function generateToken(params = {}) {
  return token.sign(params, config.secret, {
    expiresIn: 86400,
  });
}

module.exports = app => app.use('/', router);
