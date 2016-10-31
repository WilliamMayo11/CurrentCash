const express = require('express');
const logger = require('morgan');
const indexRouter = require('./routes/index.js');
const usersRouter = require('./routes/users.js');
const authRouter = require('./routes/auth.js');
const exchangesRouter = require('./routes/exchanges.js');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const methodOverride  = require('method-override');
const path = require('path');


const app = express();
const SECRET = 'tacos3000';
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/exchanges', exchangesRouter);


app.listen(port, () => console.log('Server is listening on port ', port));

