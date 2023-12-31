const mongoose = require("mongoose");

const nbaSchema = mongoose.Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    imageUrl: {type: String, required: true},
    jerseyId: {type:Number, required: true},
    category: {type:String, required: true},
    price: {type: Number, required: true},
})

module.exports = mongoose.model('nbaJersey',nbaSchema)