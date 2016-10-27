
// why is this router?
const router = require('express').Router();
const { getExchangeRate } = require('../services/fixerApi');
const { baseRate } = require('../services/fixerApi');

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

module.exports = router;
