const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Recipe');
const Recipe = mongoose.model('recipes');


// Get all recipes
router.get('/', async function(req, res, next) {
  // req.query allows for passing in parameters for query supplied by query string
  const recipes = await Recipe.find(req.query);
  res.json(recipes);
});

module.exports = router;