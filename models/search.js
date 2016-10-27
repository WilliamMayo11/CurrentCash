// const { MongoClient, ObjectID } = require('mongodb');

// const DB_CONNECTION = 'mongodb://localhost:27017/itunescrud';

// function getFavorites(req, res, next) {
//   MongoClient.connect(DB_CONNECTION, (err, db) => {
//     if (err) return next(err);
//     db.collection('favorites')
//     .find({})
//     .toArray((toArrErr, data) => {
//       if(toArrErr) return next(toArrErr);
//       res.favorites = data;
//       db.close();
//       next();
//     });
//     return false;
//   });
//   return false;
// }

// module.exports = { getFavorites };
