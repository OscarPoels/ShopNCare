const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Users = require('./models/Users');
const app = express();

mongoose.connect('mongodb+srv://adminSnC:2aFbpCh4sc3go0Zk@cluster0.e8dkq.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.post('/api/register', (req, res, next) => {
    
    const user = new Users({
        ...req.body
    });
    user.save()
        .then(() => res.status(201).json({ message: 'User enregistré !'}))
        .catch(error => res.status(400).json({ error }));
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json());

module.exports = app;