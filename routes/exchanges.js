const exchangesRouter              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { baseRate }     = require('../services/fixerApi');
const { getExchangeRate } = require('../services/fixerApi');
const { findCountries } = require('../services/restCountriesApi');
const { saveFavorite } = require('../models/favorites');
const { getFavorites } = require('../models/favorites');
const { deleteFavorite } = require('../models/favorites');


exchangesRouter.get('/', authenticate, getFavorites, (req, res) => {
  res.render('exchanges/index', {
    user: res.user || [],
    money: res.money || [],
    countries: res.countries || [],
    saved: res.favorites || []
  });
});

exchangesRouter.get('/search', authenticate, findCountries, baseRate, getFavorites, (req, res) => {
  console.log(res.money);
  console.log(res.countries);
  res.render('exchanges/index', {
    money: res.money || [],
    user: res.user || [],
    countries: res.countries || [],
    saved: res.favorites || []
  });
});

exchangesRouter.post('/exchanges/favorites', authenticate, saveFavorite, baseRate, findCountries, (req, res) => {
  console.log(res.saved);
  res.redirect('/exchanges');
});

exchangesRouter.post('/exchanges/favorites/:id', authenticate, deleteFavorite, (req, res) => {
  res.redirect('/exchanges');
})

module.exports = exchangesRouter;
