const MovieSchema = require('../models/movieSchema');
const mongoose = require('mongoose');

const getAll = async (req, res) => {
    try {
        const movies = await MovieSchema.find()
        res.status(200).json(movies);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

//[POST]/filmes/criar/
const postNewMovie = async (req, res) => {
    
    try{
        const newMovie = new MovieSchema({
            
            _id: new mongoose.Types.ObjectId(),
            Title: req.body.Title,
            Year: req.body.Year, 
            Rated: req.body.Rated, 
            Released: req.body.Released, 
            Runtime: req.body.Runtime, 
            Genre: req.body.Genre, 
            Director: req.body.Director,
            Writer: req.body.Writer, 
            Actors: req.body.Actors, 
            Plot: req.body.Plot, 
            Language: req.body.Language, 
            Country: req.body.Country, 
            Awards: req.body.Awards
                    
        });
        
        const savedMovie = await newMovie.save();

        res.status(201).send(savedMovie);

    } catch(error) {
        res.status(500).send({ message: error.message});
    }
}

module.exports = {
    getAll,
    postNewMovie
};