const exchangesRouter              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { baseRate }     = require('../services/fixerApi');
const { getExchangeRate } = require('../services/fixerApi');
const { findCountries } = require('../services/restCountriesApi');


exchangesRouter.get('/', authenticate, getExchangeRate, (req, res) => {
  res.render('exchanges/index', {
    user: res.user,
    money: res.money
  });
});

exchangesRouter.get('/search', authenticate, findCountries, baseRate, (req, res) => {
  console.log(res.money);
  console.log(res.countries);
  res.render('exchanges/index', {
    money: res.money,
    user: res.user,
    countries: res.countries
  })
});

module.exports = exchangesRouter;
