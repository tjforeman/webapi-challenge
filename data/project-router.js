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
    .then(project=>{
        res.status(201).json(project)
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

router.get('/:id', (req,res)=>{
    db
    .get(req.params.id)
    .then(project =>{
        if (project){
            res.status(200).json(project)
    }else{
    res.status(404).json({message: "The project with the specified ID does not exist."})
    }
    })
    .catch(err=>{
        res.status(500).json({error:err, message:"that project could not be retrieved."})
    })
    })

    router.get('/actions/:id', (req,res)=>{
        db
        .getProjectActions(req.params.id)
        .then(actions =>{
            if (actions.length>0){
                res.status(200).json(actions)
        }else{
        res.status(404).json({message: "The project with the specified ID either does not exist or has no posts at this time."})
        }
        })
        .catch(err=>{
            res.status(500).json({error:err, message:"Those actions could not be retrieved."})
        })
        })

    router.put('/:id',(req,res) =>{
        const updatedProject=req.body
        if (!updatedProject.name && !updatedProject.description){
            res.status(400).json({message:"Please provide a name, and description for the project."})
        }else{
        db
        .update(req.params.id,updatedProject)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(err=>{
            res.status(500).json({ error: "The project information could not be modified."})
        })
        }
         })


router.delete('/:id', (req,res)=>{
    db
    .remove(req.params.id)
    .then(project =>{
        if (project){
            res.status(200).json(project)
    }else{
    res.status(404).json({message: "The project with the specified ID does not exist."})
    }
    })
    .catch(err=>{
        res.status(500).json({error:err, message:"That project could not be removed."})
    })
    })



module.exports=router;