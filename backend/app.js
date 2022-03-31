const express = require("express");

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hacene:0tIiZ8QrqaiDkEZI@cluster0.pbk5g.mongodb.net/projet6?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  const app = express();

  module.exports = app;