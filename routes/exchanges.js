const exchangesRouter              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { baseRate }     = require('../services/fixerApi');
const { getExchangeRate } = require('../services/fixerApi');


exchangesRouter.get('/', authenticate, getExchangeRate, (req, res) => {
  res.render('exchanges/index', {
    user: res.user,
    money: res.money
  });
});

exchangesRouter.get('/search', authenticate, baseRate, (req, res) => {
  console.log(res.money)
  res.render('exchanges/index', {
    money: res.money,
    user: res.user
  })
});

module.exports = exchangesRouter;
