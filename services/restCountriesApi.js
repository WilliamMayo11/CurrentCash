const fetch = require('node-fetch');

const API_URL_SEARCH = 'https://restcountries.eu/rest/v1/currency';

function findCountries(req, res, next) {
  fetch(`${API_URL_SEARCH}/${req.query.base}`)
  .then(r => r.json())
  .then(result => {
    res.countries = result; // res.money = result.rates will bring just the rates
    next();
  }).catch(err => {
    next();
  });
}

module.exports = { findCountries };
