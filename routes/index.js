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


// FRIDAY NIGHT STATUS:
// after log in, it renders users/profile. is this right? check itunes
// user is not defined in this instance
// follow path of 'user' in itunes and see why that one carries over
