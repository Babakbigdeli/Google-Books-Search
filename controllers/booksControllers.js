const db = require("../models");

// methods for the bookController
module.exports = {
//to find books
  findAll: function(req, res) {
    console.log("findAll")
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      
      });
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      });
  },
  //to add new books to the database
  create: function(req, res) {
    console.log("Create", req.body)
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      });
  },
  //to update books in the database
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      });
  },
  //to remove books from the database
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        res.status(422).json(err)
      });
  }
};