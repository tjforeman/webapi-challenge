const express=require('express')

const db=require('./helpers/projectModel.js')

const router= express.Router()

router.post('/',(req,res) =>{
    const newProject=req.body
    if (!newProject.name && !newProject.description){
        res.status(400).json({message:"Please provide a name, and description for the project."})
    }else{
    db
    .insert(newProject)
    .then(post=>{
        res.status(201).json(post)
    })
    .catch(err=>{
        res.status(500).json({ error: "The project information could not be modified."})
    })
    }
     })


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