const MongoClient = require('mongodb');
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/current_cash';

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGOLAB_URI || 'mongodb://localhost/current_cash';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB
};
