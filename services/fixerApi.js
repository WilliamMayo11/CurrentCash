const fetch = require('node-fetch');

const API_URL = 'http://api.fixer.io/latest';

function getExchangeRate(req, res, next) {
  fetch(API_URL)
  .then(r => r.json())
  .then(result => {
    res.money = result; // res.money = result.rates will bring just the rates
    next();
  }).catch(err => {
    next();
  });
}

module.exports = { getExchangeRate };
