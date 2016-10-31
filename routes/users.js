const express = require('express');
const { createUser } = require('../models/user.js');
const { authenticate } = require('../lib/auth');
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/current_cash';

const usersRouter = express.Router();

usersRouter.post('/', createUser, (req, res) => {
  res.redirect('/login');
});

usersRouter.get('/profile', authenticate, (req, res) => {
  res.render('users/profile', { user: res.user });
});

module.exports = usersRouter;
