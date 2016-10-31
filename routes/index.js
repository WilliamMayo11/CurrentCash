const express = require('express');
const indexRouter = require('express').Router();
const { authenticate } = require('../lib/auth');
const { findCountries } = require('../services/restCountriesApi');
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/current_cash';

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

indexRouter.get('/login', (req, res) => {
  res.render('login');
});

indexRouter.get('/guest', (req, res) => {
  res.render('guest', {
    countries: []
  });
});


module.exports = indexRouter;

