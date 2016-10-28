const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
})

module.exports = indexRouter;
