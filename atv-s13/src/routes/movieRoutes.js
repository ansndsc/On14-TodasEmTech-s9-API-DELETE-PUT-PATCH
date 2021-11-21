const movieController = require('../controllers/movieController');
const express = require('express');

const router = express.Router();

router.get('/', movieController.getAll);

router.post('/create', movieController.postNewMovie);

module.exports = router;