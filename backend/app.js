const express = require("express");
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://vapoojr:vapoojr80080@futties.pyyrzag.mongodb.net/?retryWrites=true&w=majority',
{   useNewUrlParser: true,
    useUnifiedTopology:true})
.then(() => console.log("Connexion à MongoDB réussie !"))
.catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,PATCH,OPTIONS');
    next();
});

app.use('/api/jersey', (req,res,next) => {
    const jersey = [{
        jerseyId: 1,
        title: 'Marseille Domicile 2023-2024',
        description: "Maillot domicile",
        category: 'Ligue 1', 
        price: 89,
    },{
        jerseyId: 2,
        title: 'Marseille Extérieur 2023-2024',
        description: "Maillot extérieur",
        category: 'Ligue 1',
        price: 89,
    },{
        jerseyId: 3,
        title: 'Paris Saint Germain Domicile 2023-2024',
        description: "Maillot Domicile PSG",
        category: "Ligue 1",
        price: 89,
    },{
        jerseyId:4,
        title: "Paris Saint Germain Extérieur 2023-2024",
        description: "Maillot extérieur PSG",
        category: 'Ligue 1',
        price: 89,
    },{
        jerseyId:5,
        title:'Lyon Domicile 2023-2024',
        description: 'Maillot domicile Lyon',
        category: 'Ligue 1',
        price:89,
    },{
        jerseyId:6,
        title: "Lyon Extérieur 2023-2024",
        description: "Maillot extérieur Lyon",
        category: "Ligue 1 ",
        price: 89,
    },{
        jerseyId:7,
        title:"Monaco Domicile 2023-2024",
        description:"Maillot Domicile Monaco",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:8,
        title:"Monaco Extérieur 2023-2024",
        description:"Maillot Extérieur Monaco",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:9,
        title:"Lens Domicile 2023-2024",
        description:"Maillot Domicile Lens",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:10,
        title:"Lens Extérieur 2023-2024",
        description:"Maillot Domicile Lens",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:11,
        title:"Lille Domicile 2023-2024",
        description:"Maillot Domicile Lille",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:12,
        title:"Lille Extérieur 2023-2024",
        description:"Maillot Domicile Lille",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:13,
        title:"Nantes Domicile 2023-2024",
        description:"Maillot Domicile Nantes",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:14,
        title:"Nantes Extérieur 2023-2024",
        description:"Maillot Domicile Nantes",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:15,
        title:"Nice Domicile 2023-2024",
        description:"Maillot Domicile Nice",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:16,
        title:"Nice Extérieur 2023-2024",
        description:"Maillot Extérieur Nice",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:17,
        title:"Rennes Domicile 2023-2024",
        description:"Maillot Domicile Rennes",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:18,
        title:"Rennes Domicile 2023-2024",
        description:"Maillot Extérieur Rennes",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:19,
        title:"Strasbourg Domicile 2023-2024",
        description:"Maillot Domicile Strasbourg",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:20,
        title:"Strasbourg Extérieur 2023-2024",
        description:"Maillot Extérieur Strasbourg",
        category: "Ligue 1",
        price:89,
    }];
    res.status(200).json(jersey)
    next();
})

app.use("/api/nba", (req,res,next) => {
    const nbaJersey = [{
        nbaId:1,
        title: 'Miami Heat',
        description: "Miami Heat jersey",
        category: 'Est',
        price: 120,
    },{
        nbaId: 2,
        title:'Golden State Warrior',
        description:'GSW jersey',
        category:'Ouest',
        price:120,
    },{
        nbaId: 3,
        title: 'Lakers',
        description: 'Lakers Jersey',
        category: 'Ouest',
        price:120,
    },{
        nbaId: 4,
        title:"Celtics",
        description: "Celtics jersey",
        category:'Est',
        price:120,
    },{
        nbaId: 5,
        title: 'Denver',
        description:'Denver Jersey',
        category: 'Ouest',
        price: 120,
    },{
        nbaId: 6,
        title: 'Hawks',
        description: 'Hawks jersey',
        category: 'Est',
        price:120,
    },{
        nbaId: 7, 
        title: "All stars",
        description: 'All stars Jersey',
        category:null,
        price:150,
    },{
        nbaId: 8,
        title:'Cleveland Cavaliers',
        description:'Cavs Jersey',
        category:"Est",
        price:120,
    },{
        nbaId: 9,
        title:'Oklahoma',
        description:"Okc jersey",
        category:"Ouest",
        price:120,
    },{
        nbaId:10,
        title:'Milwaukee',
        description:"Bucks Jersey",
        category:"Est",
        price:120,
    },{
        nbaId:11,
        title:'Nets',
        description:"Nets Jersey",
        category:'Est',
        price:120,
    },{
        nbaId:12,
        title:'Pacers',
        description: "Pacers jersey",
        category:"Est",
        price:120,
    },{
        nbaId: 13,
        title: "Chicago Bulls",
        description:'Bulls jersey',
        category:'Est',
        price:120,
    },{
        nbaId:14,
        title:'Utah Jazz',
        description:'Jazz Jersey',
        category:'Ouest',
        price:120,
    },{
        nbaId:15,
        title:'San Antonio Spurs',
        description:"Spurs jersey",
        category:'Ouest',
        price:120,
    },{
        nbaId:16,
        title:"Phoenix Suns",
        description:"Suns jersey",
        category:"Ouest",
        price:120,
    },{
        nbaId:17,
        title:"Philadelphia 76ers",
        description:"76ers jersey",
        category:'Est',
        price:120,
    },{
        nbaId:18,
        title:'Los Angeles Clippers',
        description:'Clippers jersey',
        category:"Ouest",
        price:120,
    },{
        nbaId:19,
        title:"Houston Rockets",
        description:"Rockets jersey",
        category:'Ouest',
        price:120,
    },{
        nbaId:20,
        title:'Charlotte Hornets',
        description:"Hornets jersey",
        category:'Est',
        price:120,
    }];
    res.status(200).json(nbaJersey)
})



module.exports = app 