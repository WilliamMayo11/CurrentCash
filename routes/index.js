const express = require('express');
const indexRouter = express.Router();
const { authenticate } = require('../lib/auth');

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
})

indexRouter.get('/login', (req, res) => {
  res.render('login');
})



module.exports = indexRouter;

