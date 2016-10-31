const express = require('express');
const indexRouter = express.Router();
const { authenticate } = require('../lib/auth');
const { findCountries } = require('../services/restCountriesApi');

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

indexRouter.get('/login', (req, res) => {
  res.render('login');
});

indexRouter.get('/guest', findCountries, (req, res) => {
  res.render('guest', {
    countries: res.countries || []
  });
});


module.exports = indexRouter;

