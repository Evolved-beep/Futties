const express = require("express");
const router = express.Router();
const jersey = require("../models/jerseyModel")
/* const nba = require("../models/nbaModel") */

router.get('/product/jersey', (req,res,next) => {
    const jersey = [{
        jerseyId: 1,
        title: 'Marseille Domicile 2023-2024',
        imageUrl:"/img/Ligue1/OmDom.png",
        description: "Maillot domicile",
        category: 'Ligue 1', 
        price: 89,
    },{
        jerseyId: 2,
        title: 'Marseille Extérieur 2023-2024',
        imageUrl: "/img/Ligue1/MarseilleExt.png",
        description: "Maillot extérieur",
        category: 'Ligue 1',
        price: 89,
    },{
        jerseyId: 3,
        title: 'Paris Saint Germain Domicile 2023-2024',
        imageUrl: "/img/Ligue1/ParisDom.png",
        description: "Maillot Domicile PSG",
        category: "Ligue 1",
        price: 89,
    },{
        jerseyId:4,
        title: "Paris Saint Germain Extérieur 2023-2024",
        imageUrl: "/img/Ligue1/ParisExt.png",
        description: "Maillot extérieur PSG",
        category: 'Ligue 1',
        price: 89,
    },{
        jerseyId:5,
        title:'Lyon Domicile 2023-2024',
        imageUrl:"/img/Ligue1/LyonDom.png",
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
        imageUrl:'/img/Ligue1/MonacoDom.png',
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
        imageUrl:'/img/Ligue1/LensDom.png',
        description:"Maillot Domicile Lens",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:10,
        title:"Lens Extérieur 2023-2024",
        imageUrl:'/img/Ligue1/LensExt.png',
        description:"Maillot Domicile Lens",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:11,
        title:"Lille Domicile 2023-2024",
        imageUrl:'/img/Ligue1/LilleDom.png',
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
        imageUrl:'/img/Ligue1/NiceDom.png',
        description:"Maillot Domicile Nice",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:16,
        title:"Nice Extérieur 2023-2024",
        imageUrl:"/img/Ligue1/NiceExt.png",
        description:"Maillot Extérieur Nice",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:17,
        title:"Rennes Domicile 2023-2024",
        imageUrl:'/img/Ligue1/RennesDom.png',
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
        imageUrl:"/img/Ligue1/StrasbourgDom.png",
        description:"Maillot Domicile Strasbourg",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:20,
        title:"Strasbourg Extérieur 2023-2024",
        description:"Maillot Extérieur Strasbourg",
        category: "Ligue 1",
        price:89,
    },{
        jerseyId:21,
        title:"Manchester City Domicile 2023-2024",
        description:"Maillot Domicile City",
        category:"PL",
        price:95,
    },{
        jerseyId:22,
        title:"Manchester City Extérieur 2023-2024",
        description:"Maillot Extérieur City",
        category:"PL",
        price:95,
    },{
        jerseyId:23,
        title:"Arsenal Domicile 2023-2024",
        description:"Maillot Domicile Arsenal",
        category:"PL",
        price:95,
    },{
        jerseyId:24,
        title:"Arsenal Extérieur 2023-2024",
        description:"Maillot Extérieur Arsenal",
        category:"PL",
        price:95,
    },{
        jerseyId:25,
        title:"Manchester United Domicile 2023-2024",
        description:"Maillot Domicile United",
        category:"PL",
        price:95,
    },{
        jerseyId:26,
        title:"Manchester United Extérieur 2023-2024",
        description:"Maillot Extérieur United",
        category:"PL",
        price:95,
    },{
        jerseyId:27,
        title:"Newcastle Domicile 2023-2024",
        description:"Maillot Domicile Newcastle",
        category:"PL",
        price:95,
    },{
        jerseyId:28,
        title:"Newcastle Extérieur 2023-2024",
        description:"Maillot Extérieur Newcastle",
        category:"PL",
        price:95,
    },{
        jerseyId:29,
        title:"Liverpool Domicile 2023-2024",
        description:"Maillot Domicile Liverpool",
        category:"PL",
        price:95,
    },{
        jerseyId:30,
        title:"Liverpool Extérieur 2023-2024",
        description:"Maillot Extérieur Liverpool",
        category:"PL",
        price:95,
    },{
        jerseyId:31,
        title:"Brigthon Domicile 2023-2024",
        description:"Maillot Domicile Brighton",
        category:"PL",
        price:95,
    },{
        jerseyId:32,
        title:"Brighton Extérieur 2023-2024",
        description:"Maillot Extérieur Brighton",
        category:"PL",
        price:95,
    },{
        jerseyId:33,
        title:"Aston Villa Domicile 2023-2024",
        description:"Maillot Domicile Aston Villa",
        category:"PL",
        price:95
    },{
        jerseyId:34,
        title:"Aston Villa Extérieur 2023-2024",
        description:"Maillot Extérieur Aston Villa",
        category:"PL",
        price:95
    },{
        jerseyId:35,
        title:"Tottenham Domicile 2023-2024",
        description:"Maillot Domicile Tottenham",
        category:"PL",
        price:95
    },{
        jerseyId:36,
        title:"Tottenham Extérieur 2023-2024",
        description:"Maillot Extérieur Tottenham",
        category:"PL",
        price:95
    },{
        jerseyId:37,
        title:"Chelsea Domicile 2023-2024",
        description:"Maillot Domicile Chelsea",
        category:"PL",
        price:95
    },{
        jerseyId:38,
        title:"Chelsea Extérieur 2023-2024",
        description:"Maillot Extérieur Chelsea",
        category:"PL",
        price:95
    },{
        jerseyId:39,
        title:"Everton Domicile 2023-2024",
        description:"Maillot Domicile Everton ",
        category:"PL",
        price:95
    },{
        jerseyId:40,
        title:"Everton Extérieur 2023-2024",
        description:"Maillot Extérieur Everton",
        category:"PL",
        price:95
    },{
        jerseyId:41,
        title:"Bayern Munich Domicile 2023-2024",
        description:"Maillot Domicile Bayern",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:42,
        title:"Bayern Munich Extérieur 2023-2024",
        description:"Maillot Extérieur Bayern",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:43,
        title:"Borussia Dortmund Domicile 2023-2024",
        description:"Maillot Domicile Dortmund",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:44,
        title:"Borussia Dortmund Extérieur 2023-2024",
        description:"Maillot Extérieur Dortmund",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:45,
        title:"Francfort Domicile 2023-2024",
        description:"Maillot Domicile Francfort",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:46,
        title:"Francfort Extérieur 2023-2024",
        description:"Maillot Extérieur Francfort",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:47,
        title:"R.B Leipzig Domicile 2023-2024",
        description:"Maillot Domicile Leipzig",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:48,
        title:"R.B Leipzig Extérieur 2023-2024",
        description:"Maillot Extérieur Leipzig",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:49,
        title:"Mayence Domicile 2023-2024",
        description:"Maillot Domicile Mayence",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:50,
        title:"Mayence Extérieur 2023-2024",
        description:"Maillot Extérieur Mayence",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:51,
        title:"Borussia M'Gladbach Domicile 2023-2024",
        description:"Maillot Domicile M'gladbach",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:52,
        title:"Borussia M'Gladbach Extérieur 2023-2024",
        description:"Maillot Extérieur M'gladbach",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:53,
        title:"Stuttgart Domicile 2023-2024",
        description:"Maillot Domicile Stuttgart",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:54,
        title:"Stuttgart Extérieur 2023-2024",
        description:"Maillot Extérieur Stuttgart",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:55,
        title:"F.C Fribourg Domicile 2023-2024",
        description:"Maillot Domicile Fribourg",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:56,
        title:"F.C Fribourg",
        description:"Maillot Extérieur Fribourg",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:57,
        title:"Cologne Domicile 2023-2024",
        description:"Maillot Domicile Cologne ",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:58,
        title:"Cologne Extérieur 2023-2024",
        description:"Maillot Extérieur Cologne",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:59,
        title:"Augsbourg Domicile 2023-2024",
        description:"Maillot Domicile Augsbourg",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:60,
        title:"Augsbourg Extérieur 2023-2024",
        description:"Maillot Extérieur Augsbourg",
        category:"Bundesliga",
        price:120
    },{
        jerseyId:61,
        title:"Juventus Domicile 2023-2024",
        description:"Maillot Domicile Juventus",
        category:"Série A",
        price:85
    },{
        jerseyId:62,
        title:"Juventus Extérieur 2023-2024",
        description:"Maillot Extérieur Juventus",
        category:"Série A",
        price:85
    },{
        jerseyId:63,
        title:"AC Milan Domicile 2023-2024",
        description:"Maillot Domicile AC Milan",
        category:"Série A",
        price:85
    },{
        jerseyId:64,
        title:"AC Milan Extérieur 2023-2024",
        description:"Maillot Extérieur AC Milan",
        category:"Série A",
        price:85
    },{
        jerseyId:65,
        title:"Inter Milan Domicile 2023-2024",
        description:"Maillot Domicile Inter Milan",
        category:"Série A",
        price:85
    },{
        jerseyId:66,
        title:"Inter Milan Extérieur 2023-2024",
        description:"Maillot Extérieur Inter Milan",
        category:"Série A",
        price:85
    },{
        jerseyId:67,
        title:"AS Roma Domicile 2023-2024",
        description:"Maillot Domicile AS Roma",
        category:"Série A",
        price:85
    },{
        jerseyId:68,
        title:"AS Roma Extérieur 2023-2024",
        description:"Maillot Extérieur AS Roma",
        category:"Série A",
        price:85
    },{
        jerseyId:69,
        title:"Lazio Rome Domicile 2023-2024",
        description:"Maillot Domicile Lazio Rome",
        category:"Série A",
        price:85
    },{
        jerseyId:70,
        title:"Lazio Rome Extérieur 2023-2024",
        description:"Maillot Extérieur Lazio Rome",
        category:"Série A",
        price:85
    },{
        jerseyId:71,
        title:"Fiorentina Domicile 2023-2024",
        description:"Maillot Domicile Fiorentina",
        category:"Série A",
        price:85
    },{
        jerseyId:72,
        title:"Fiorentina Extérieur 2023-2024 ",
        description:"Maillot Extérieur Fiorentina",
        category:"Série A",
        price:85
    },{
        jerseyId:73,
        title:"Atalanta Bergame Domicile 2023-2024",
        description:"Maillot Domicile Atalanta",
        category:"Série A",
        price:85
    },{
        jerseyId:74,
        title:"Atalanta Bergame Extérieur 2023-2024",
        description:"Maillot Extérieur Atalanta",
        category:"Série A ",
        price:85
    },{
        jerseyId:75,
        title:"Naples Domicile 2023-2024",
        description:"Maillot Domicile Naples",
        category:"Série A",
        price:85
    },{
        jerseyId:76,
        title:"Naples Extérieur 2023-2024",
        description:"Maillot Extérieur Naples",
        category:"Série A",
        price:85
    },{
        jerseyId:77,
        title:"Torino Domicile 2023-2024",
        description:"Maillot Domicile Torino",
        category:"Série A",
        price:85
    },{
        jerseyId:78,
        title:"Torino Extérieur 2023-2024",
        description:"Maillot Extérieur Torino",
        category:"Série A",
        price:85
    },{
        jerseyId:79,
        title:"Genoa Domicile 2023-2024",
        description:"Maillot Domicile Genoa",
        category:"Série A",
        price:85
    },{
        jerseyId:80,
        title:"Genoa Extérieur 2023-2024",
        description:"Maillot Extérieur Genoa",
        category:"Série A",
        price:85
    },{
        jerseyId:81,
        title:"FC Barcelone Domicile 2023-2024",
        description:"Maillot Domicile Barcelone",
        category:"Liga",
        price:92
    },{
        jerseyId:82,
        title:"FC Barcelone Extérieur 2023-2024",
        description:"Maillot Extérieur Barcelone",
        category:"Liga",
        price:92
    },{
        jerseyId:83,
        title:"Real Madrid Domicile 2023-2024",
        description:"Maillot Domicile Real Madrid",
        category:"Liga",
        price:92
    },{
        jerseyId:84,
        title:"Real Madrid Extérieur 2023-2024",
        description:"Maillot Extérieur Real Madrid",
        category:"Liga",
        price:92
    },{
        jerseyId:85,
        title:"FC Séville Domicile 2023-2024",
        description:"Maillot Domicile Séville",
        category:"Liga",
        price:92
    },{
        jerseyId:86,
        title:"FC Séville Extérieur 2023-2024",
        description:"Maillot Extérieur Séville",
        category:"Liga",
        price:92
    },{
        jerseyId:87,
        title:"Athlético Madrid Domicile 2023-2024",
        description:"Maillot Domicile Atl Madrid",
        category:"Liga",
        price:92
    },{
        jerseyId:88,
        title:"Atl Madrid Extérieur 2023-2024",
        description:"Maillot Extérieur Atl Madrid",
        category:"Liga",
        price:92
    },{
        jerseyId:89,
        title:"FC Valence Domicile 2023-2024",
        description:"Maillot Domicile Valence",
        category:"Liga",
        price:92
    },{
        jerseyId:90,
        title:"FC Valence Extérieur 2023-2024",
        description:"Maillot Extérieur Valence",
        category:"Liga",
        price:92
    },{
        jerseyId:91,
        title:"Betis Séville Domicile 2023-2024",
        description:"Maillot Domicile Bétis Séville",
        category:"Liga",
        price:92
    },{
        jerseyId:92,
        title:"Betis Séville Extérieur 2023-2024",
        description:"Maillot Extérieur Bétis Séville",
        category:"Liga",
        price:92
    },{
        jerseyId:93,
        title:"Villareal Domicile 2023-2024",
        description:"Maillot Domicile Villareal",
        category:"Liga",
        price:92
    },{
        jerseyId:94,
        title:"Villareal Extérieur 2023-2024",
        description:"Maillot Extérieur Villareal",
        category:"Liga",
        price:92
    },{
        jerseyId:95,
        title:"Celta Vigo Domicile 2023-2024",
        description:"Maillot Domicile Celta Vigo",
        category:"Liga",
        price:92
    },{
        jerseyId:96,
        title:"Celta Vigo Extérieur 2023-2024",
        description:"Maillot Extérieur Celta Vigo",
        category:"Liga",
        price:92
    },{
        jerseyId:97,
        title:"Grenade Domicile 2023-2024",
        description:"Maillot Domicile Grenade",
        category:"Liga",
        price:92
    },{
        jerseyId:98,
        title:"Gérone Domicile 2023-2024",
        description:"Maillot Domicile Gérone",
        category:"Liga",
        price:92
    },{
        jerseyId:99,
        title:"Gérone Extérieur 2023-2024",
        description:"Maillot Extérieur Gérone",
        category:"Liga",
        price:92
    },{
        jerseyId:100,
        title:"Benfica Thrid 2023-2024",
        description:"Maillot Thrid Benfica",
        category:"RDM",
        price:140
    },{
        jerseyId:101,
        title:"Flamengo Domicile 2023-2024",
        description:"Maillot Domicile Flamengo",
        category:"RDM",
        price:60
    },{
        jerseyId:102,
        title:"Porto Domicile 2023-2024",
        description:"Maillot Domicile Porto",
        category:"RDM",
        price:120,
    },{
        jerseyId:103,
        title:"River plate Domicile 2023-2024",
        description:"Maillot Domicile River Plate",
        category:"RDM",
        price:62
    },{
        jerseyId:104,
        title:"Tigres Domicile 2023-2024",
        description:"Maillot Domicile Tigres",
        category:"RDM",
        price:75
    },{
        jerseyId:105,
        title:"Inter Miami Domicile 2023-2024",
        description:"Maillot Domicile Inter Miami ",
        category:"RDM",
        price:170
    },{
        jerseyId:106,
        title:"Ajax Domicile 2023-2024",
        description:"Maillot Domicile Ajax",
        category:"RDM",
        price:"45"
    },{
        jerseyId:107,
        title:"PSV Extérieur 2023-2024",
        description:"Maillot Extérieur PSV",
        category:"RDM",
        price:62
    },{
        jerseyId:108,
        title:"DC United Extérieur 2023-2024",
        description:"Maillot Extérieur DC United",
        category:"RDM",
        price:55
    },{
        jerseyId:109,
        title:"France Maillot 2023-2024",
        description:"Maillot Equipe de France",
        category:"Sélection Nationale",
        price:150
    },{
        jerseyId:110,
        title:"Espagne Maillot 2023-2024",
        description:"Maillot de la Roja ",
        category:"Sélection Nationale",
        price:130
    },{
        jerseyId:111,
        title:"Portugal Maillot 2023-2024",
        description:"Maillot du Portugal ",
        category:"Séléction Nationale",
        price:140
    },{
        jerseyId:112,
        title:"Allemagne Maillot 2023-2024",
        description:"Maillot de la Manschaft",
        category:"Sélection Nationale",
        price:110
    },{
        jerseyId:113,
        title:"Belgique Maillot 2023-2024",
        description:"Maillot de la sélection Belge",
        category:"Sélection Nationale",
        price:90
    },{
        jerseyId:114,
        title:"Japon Maillot 2023-2024",
        description:"Maillot de la sélection Japonaise",
        category:"Sélection Nationale",
        price:100
    },{
        jerseyId:115,
        title:"Corée du Sud Maillot 2023-2024",
        description:"Maillot de la sélection Coréenne",
        category:"Sélection Nationale",
        price:105
    },{
        jerseyId:116,
        title:"Mexique Maillot 2023-2024",
        description:"Maillot de la sélection Mexicaine",
        category:"Sélection Nationale",
        price:170
    }];
    res.status(200).json(jersey)
    next();
})

router.get('/' + "", (req,res,next) => {
    jersey.find()
    .then((maillot) => {
        res.status(200).json(maillot)
    })
    .catch((error) => {
        res.status(400).json({
            error:error
        })
    })
}) 

/* router.use("/product/nba", (req,res,next) => {
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
*/



module.exports = router