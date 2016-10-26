require('dotenv').config();

const express = require('express');
const logger = require('morgan');

const homeRoute = require('./routes/home');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

app.use(logger('dev'));
app.use('/', homeRoute);

app.listen(port, () => console.log('Server is running on port ', port));

/*__________________________________*/

