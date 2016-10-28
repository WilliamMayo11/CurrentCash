const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { baseRate }     = require('../services/fixerApi');
const { getExchangeRate } = require('../service/fixerApi');


router.get('/', authenticate, getExchangeRate, (req, res) => {
  res.render('exchanges/index', {
    money: res.money
  });
});
