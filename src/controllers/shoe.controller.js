const express = require('express');
const router = express.Router();

const shoe = require('../model/shoe.model');


router.post("/",async (req,res) => {
    try{
        let Shoe = await shoe.create(req.body);
        // return res.send(Shoe)
        return res.status(200).json({message: 'show',Shoe})
    }
    catch(e){
        // return res.send(e)
        return res.status(404).json({message: 'error',e})
    }
})

router.get("/sja",async (req,res) => {
    try{
        let Shoe = await shoe.find().lean().exec();
        // return res.send(Shoe)
        return res.status(200).json({message: 'show',Shoe})
    }
    catch(e){
        // return res.send(e)
        return res.status(404).json({message: 'error',e})
    }
})

router.get("/:id",async (req,res) => {
    try{
        let Shoe = await shoe.findOne({_id:req.params.id});
        return res.send(Shoe)
    }
    catch(e){
        return res.send(e)
    }
})




module.exports = router;