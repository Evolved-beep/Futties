const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const app = express();
const cors = require('cors');
const jerseyRoutes = require('./routes/product');
const bodyParser = require("body-parser");

mongoose.connect('mongodb+srv://vapoojr:vapoojr80080@futties.pyyrzag.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology:true})
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
app.use(bodyParser.json());
app.use("/api/product/football",jerseyRoutes);
app.get("/api/product/football", jerseyRoutes);
    
module.exports = app