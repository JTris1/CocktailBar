const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const RecipeSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    glass: {
        type: String
    },
    category: {
        type: String
    },
    ingredients: {
        type: Array
    },
    garnish: {
        type: String
    },
    preparation: {
        type: String
    }
});

mongoose.model('recipes', RecipeSchema);