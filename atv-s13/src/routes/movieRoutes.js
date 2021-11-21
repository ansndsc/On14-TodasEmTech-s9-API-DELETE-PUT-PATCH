const movieController = require('../controllers/movieController');
const express = require('express');

const router = express.Router();

//@route GET /movies/
//@desc Listar todos os filmes
//@access Public
router.get('/', movieController.getAll);

//@route POST /movies/create
//@desc Adicionar novo filme
//@access Public
router.post('/create', movieController.postNewMovie);

//@route PATCH /movies/updatetitle/:id
//@desc Atualizar título de filme
//@access Public
router.patch('/updatetitle/:id', movieController.patchUpdateTitleById);

//@route PUT /movies/update/:id
//@desc Atualizar qualquer informação, menos o id
//@access Public
router.put('/update/:id', movieController.updateById);

//@router DELETE /movies/delete/:id
//@desc Deletar filme
//@access Public
router.delete('/delete/:id', movieController.deleteMovie);

module.exports = router;