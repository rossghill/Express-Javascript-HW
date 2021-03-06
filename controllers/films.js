//since we don't have a database we'll use our front end models at the moment
const films = require('../client/src/models/films')();
const Film = require('../client/src/models/film');
const Review = require('../client/src/models/review');

const express = require('express');
const filmRouter = new express.Router();

// NEW
filmRouter.post('/', function(req, res) {
  var film = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(film);
  res.json({data: films});
});

// GET BY ID
filmRouter.get('/:id', function(req, res){
  res.json({data: films[req.params.id]})
});

module.exports =  filmRouter;
