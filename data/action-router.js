const express=require('express')

const db=require('./helpers/actionModel.js')

const router= express.Router()


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