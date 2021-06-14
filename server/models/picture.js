const mongoose = require('mongoose')

const pictureSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    path:{
        type:String
    },
    score_positif:{
        type:Number
    },
    score_negatif:{
        type:Number
    }

})

module.exports = mongoose.model('Picture', pictureSchema)