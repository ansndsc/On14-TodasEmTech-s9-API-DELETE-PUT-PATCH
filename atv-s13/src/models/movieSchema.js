const mongoose = require('mongoose');//instanciar > chamar algum objeto que já existe para algum contexto

const movieSchema = new mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    Rated: {
        type: String
    },
    Released: {
        type: String
    },
    Runtime: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Director: {
        type: String,
        required: true
    },
    Writer: {
        type: String,
        required: true
    },
    Actors: {
        type: String,
        required: true
    },
    Plot: {
        type: String,
        required: true
    },
    Language: {
        type: String,
        required: true
    },
    Country: {
        type: String
    },
    Awards: {
        type: String
    }
    
}, { timestamps: true });

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;