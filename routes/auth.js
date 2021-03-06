const express    = require('express');
const { logIn }  = require('../lib/auth');

// Router
const authRouter = express.Router();

/**
 * Log In and if successful assign res.user._id to the session
 * It uses the logIn middleware from the auth library to parse the form inputs
 * and save the user to the database
 */
authRouter.post('/', logIn, (req, res) => {
  res.redirect('/users/profile');
});

// Logout by assigning null to the userId in the session
authRouter.delete('/', (req, res) => {
  req.session.userId = null;
  res.redirect('/users/login');
});

module.exports = authRouter;
