const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/userModels');
require('dotenv').config()


exports.createUser = (req, res,next) => {
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash,
            firstname: req.body.firstname,
            lastname: req.body.lastname, 
            adress: req.body.adress, 
            zipcode: req.body.zipcode, 
            city: req.body.city
        })
        user.save()
        .then(() => res.status(201).json({message:'Utilisateur crée'}))
        .catch(() => res.status(500).json({error}))
    })
    .catch(error => res.status(500).json({error}));
}

exports.login = async (req, res, next) => {
    await User.findOne({email: req.body.email})
    .then(user => {
        if(user === null){
            res.status(401).json({message:'Paire identifiant/mot de passe incorrect'});
        } else {
            bcrypt.compare(req.body.password, user.password)
            .then(valid => {
                if(!valid){
                    res.status(401).json({message:'Paire identifiant/Mot de passe incorrect'})
                } else {
                    res.status(200).json({
                        token: jwt.sign(
                            {userId: user._id},
                            process.env.TOKEN_KEY,
                            {expiresIn: '24h'}
                        )
                    })
                    console.log(user._id);
                    next()  
                } 
            })
            .catch(error => {
                res.status(500).json(console.error(error))
            })
        }
    })
    .catch(error => res.status(500).json(console.error(error)))

}

exports.userProfile = async (req,res)=> {
    await User.findOne({email: req.body.email})
    .then((user)=> {
        res.status(200).json({
            _id: user.id,
            firstname: user.firstname, 
            lastname: user.lastname, 
            adress: user.adress, 
            zipcode: user.zipcode, 
            city: user.city
        })
        console.log(user);
    })
    .catch(error => {
        res.status(400).json(console.error({message:'Authentification impossible'}))
    })
   
  }

exports.modifyProfile = (req,res) => {
    User.updateOne()
    .then((user) => {
        res.status(200).json({
            lastname: user.lastname,
            firstname: user.firstname,
            adress: user.adress,
            zipcode: user.zipcode,
            city: user.city
        })
        console.log(user);
    })
    .catch(error => res.status(400).json({error}));
}