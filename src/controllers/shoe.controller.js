const express = require('express');
const router = express.Router();

const shoe = require('../model/shoe.model');


router.post("/",async (req,res) => {
    try{
        let Shoe = await shoe.create(req.body);
        return res.send(Shoe)
    }
    catch(e){
        return res.send(e)
    }
})

router.get("/",async (req,res) => {
    try{
        let Shoe = await shoe.find().lean().exec();
        return res.send(Shoe)
    }
    catch(e){
        return res.send(e)
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