const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
})

indexRouter.get('/login', (req, res) => {
  res.render('login');
})

indexRouter.get('/users/profile', (req, res) => {
  res.render('users/profile')
})

module.exports = indexRouter;
