const express=require('express')

const db=require('./helpers/actionModel.js')

const router= express.Router()

router.post('/',(req,res) =>{
    const newAction=req.body
    if (newAction.project_id || !newAction.notes || !newAction.description){
        res.status(400).json({message:"Please provide a valid project id, as well as a  description and notes for the project."})
    }else if
        (newAction.description.length>128) {
         res.status(400).json({message:' your Description must be less than 128 characters'})
        }else{
    db
    .insert(newAction)
    .then(action=>{
        res.status(201).json(action)
    })
    .catch(err=>{
        res.status(500).json({ error: "The action information could not be modified."})
    })
    }
     })

router.get('/', (req,res)=>{
    db
    .get()
    .then(actions =>{
        res.status(200).json(actions)
    })
    .catch(err=>{
        res.status(500).json({error:err, message:"The action information could not be retrieved."})
    })
})


module.exports=router;