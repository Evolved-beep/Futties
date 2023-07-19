const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()
const app = express();

const jersey = require('./routes/product')

mongoose.connect('mongodb+srv://vapoojr:vapoojr80080@futties.pyyrzag.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology:true})
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH,OPTIONS');
    next();
});

app.get('/product/jersey', jersey);




module.exports = app