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

//[PATCH]/filmes/updateTitle?{id}
const patchUpdateTitleById = async (req, res) => {
    
    try {

        let movieFound = await MovieSchema.findById(req.params.id);
        console.log(movieFound);

        let newTitle = req.body.Title;
                
        if(movieFound){
            movieFound.Title = newTitle;
        }

        const savedMovie = await movieFound.save();

        res.status(200).json(savedMovie); 

    } catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
};

//[PUT]/filmes/update/{id}
const updateById = async (req, res) => {
    try {
        //pegar o id que vem da request
        //encontrar o filme que tem esse id
        const foundMovie = await MovieSchema.findById(req.params.id);
        
        //pegar o req do body
        //atualizar as informções
        if(foundMovie){
            foundMovie.Title = req.body.Title || foundMovie.Title;
            foundMovie.Year = req.body.Year || foundMovie.Year;
            foundMovie.Rated = req.body.Rated || foundMovie.Rated;
            foundMovie.Released = req.body.Released || foundMovie.Released;
            foundMovie.Runtime = req.body.Runtime || foundMovie.Runtime;
            foundMovie.Genre = req.body.Genre || foundMovie.Genre;
            foundMovie.Director = req.body.Director || foundMovie.Director;
            foundMovie.Writer = req.body.Writer || foundMovie.Writer;
            foundMovie.Actors = req.body.Actors || foundMovie.Actors;
            foundMovie.Plot = req.body.Plot || foundMovie.Plot;
            foundMovie.Language = req.body.Language || foundMovie.Language;
            foundMovie.Country = req.body.Country || foundMovie.Country;
            foundMovie.Awards = req.body.Awards || foundMovie.Awards;
        }    
        
        //salvar as informações atualizadas
        const savedMovie = await foundMovie.save();

        //mostrar as informações atualizadas
        res.status(200).json(savedMovie);
        
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
    
}

const deleteMovie = async (req, res) => {
    try {
        const foundMovie = await MovieSchema.findById(req.params.id);
        
        await foundMovie.delete();

        res.status(204);
        
    } catch (error) {
        res.status(500).send({message: error.message})
    }

}

module.exports = {
    getAll,
    postNewMovie,
    patchUpdateTitleById,
    updateById,
    deleteMovie
};