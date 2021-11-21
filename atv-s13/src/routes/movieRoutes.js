const movieController = require('../controllers/movieController');
const express = require('express');

const router = express.Router();

//@router GET /api/movies/
//@desc Listar todos os filmes
//@access Public
router.get('/', movieController.getAll);

//@router POST /api/movies/create
//@desc Adicionar um novo filme
//@access Public
router.post('/create', movieController.postNewMovie);

//@router PATCH /api/movies/updatetitle/:id
//@desc Atualizar o título de um filme
//@access Public
router.patch('/updatetitle/:id', movieController.patchUpdateTitleById);

//@router PUT /api/movies/update/:id
//@desc Atualizar qualquer informação, menos o id
//@access Public
router.put('/update/:id', movieController.updateById);

//@router DELETE /api/movies/delete/:id
//@desc Deletar filme
//@access Public
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;