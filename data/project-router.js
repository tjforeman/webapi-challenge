const express=require('express')

const db=require('./helpers/projectModel.js')

const router= express.Router()

router.get('/', (req,res)=>{
    db
    .get()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(err=>{
        res.status(500).json({error:err, message:"The project information could not be retrieved."})
    })
})



module.exports=router;