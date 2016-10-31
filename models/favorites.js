// Code on this page attributed to Bobby King and Rafa Pacas
// From General Assembly WDI labs - Cruise Movies and iTunes CRUD

const { MongoClient, ObjectID } = require('mongodb');
const dbConnection = process.env.MONGODB_URI || 'mongodb://localhost:27017/current_cash';

function getFavorites(req, res, next) {
  // find all favorites for your userId
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if(toArrErr) return next(toArrErr);
        res.favorites = data;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

function saveFavorite(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for(key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.favorite.userId = req.session.userId;

  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .insert(insertObj.favorite, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

// Delete method doesn't change because we are deleting objects from the database
// based on that object's unique _id - you do not need to specify which user as
// the _id is sufficient enough
function deleteFavorite(req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return next(err);
    db.collection('favorites')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
      return false;
  });
  return false;
}

module.exports = { getFavorites, saveFavorite, deleteFavorite };
