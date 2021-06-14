const express = require('express')
const router = express.Router()
const Pictures = require('../models/picture')

//Getting all
router.get('/', async (req,res) => {
    try{
        const pictures = await Pictures.find()
        res.json(pictures)
    }catch(err){
        res.status(500).json({ message:err.message})
    }
   
})
//Getting One Path with id
router.get('/:id', getPicture, (req,res) => {
   res.send(res.picture.path)
})

//Creating One
router.post('/',async (req,res) => {
    const picture= new Pictures({
        id: req.body.id,
        path: req.body.path,
        score_positif: req.body.score_positif,
        score_negatif:req.body.score_negatif
    })
    try{
        const newPicture = await picture.save()
        res.status(201).json(newPicture)
    } catch(err){
        res.status(400).json({ message: err.message })
    }
})
//Updating One Score Positif & Score Negatif
router.patch('/:id', getPicture,async  (req,res) => {
    if(req.body.score_positif != null){
        res.picture.score_positif = req.body.score_positif
    }
    if(req.body.score_negatif!= null){
        res.picture.score_negatif = req.body.score_negatif
    }
    if(req.body.path!= null){
        res.picture.path = req.body.path
    }
    try{
        const updatePicture = await res.picture.save()
        res.json(updatePicture)
    }catch(err){
        res.status(400).json({message:err.message})
    }
})

//Deleting One
router.delete('/:id',getPicture, async (req,res) => {
try{
    await res.picture.remove()
    res.json({ message:'Deleted Picture'})
  }catch(err){
    res.status(500).json({ message: err.message})
  }
})

//Getting piture with id
async function getPicture(req,res,next) {
    let picture
    try{
        picture= await Pictures.findOne({id:req.params.id})
        if(picture== null){
            return res.status(404).json({ message: 'Cannot find picture'})
        }
    }catch(err){
        return res.status(500).json({ message: err.message })
    }
    res.picture = picture
    next()
}

module.exports = router