const express = require('express');
const cors = require('cors');

const db = require('./database/mongoConfig');
const movieRoutes = require('./routes/movieRoutes');

require('dotenv-safe').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/movies', movieRoutes);

db.connect();

module.exports = app;