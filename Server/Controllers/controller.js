const express = require('express') // You'll still need require for express
const router = express.Router()
const Model = require('../Model/model.js') // Import using import

//get everything
router.get('/',async(req,res) =>{
    try{
        const model=await Model.find()
        res.json(model)
    }
    catch(err){
        res.json('error'+err)
    }
})

//get by id
router.get('/:id',async(req,res) =>{
    try{
        const model=await Model.findById(req.params.id)
        res.json(model)
    }
    catch(err){
        res.send('error'+err)
    }
})

//create
router.post('/',async(req,res) =>{
    const model=new Model
    ({
        name:req.body.name,
        branch:req.body.branch,
        section:req.body.section,
        roll_no:req.body.roll_no,
        exam_status:req.body.exam_status
    })

    try{
        const a1=await model.save()
        res.json(a1)
    }

    catch(err){
        res.json('error'+err)
    }
})

//update
router.patch('/:id',async(req,res) =>{
    try{
        const model=await Model.findById(req.params.id)
        model.branch=req.body.branch
        model.name=req.body.name
        const a1=await model.save()
        res.json(a1)
    }
    catch(err){
        res.send('error'+err)
    }
})

module.exports=router;