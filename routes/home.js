
// why is this router?
const router = require('express').Router();
const { getExchangeRate } = require('../services/fixerApi');
const { baseRate } = require('../services/fixerApi');
const favorites = require('../models/favorites');
// const { addToWatchList } = require('../models/favorites');

router.get('/', getExchangeRate, (req, res) => {
  console.log(res.money)
  res.render('index', {
    money: res.money
  })
})

router.get('/search', baseRate, (req, res) => {
  console.log(res.money)
  res.render('index', {
    money: res.money
  })
})

router.post('/favorites', favorites.getFavorites, (req, res) => {
  console.log(favorites);
  // res.redirect('index', {
  //   money: money.rates
  // });
});


module.exports = router;
