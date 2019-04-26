const express=require('express');

const server=express()
server.use(express.json());

const actionRouter = require('./data/action-router.js');
const projectRouter = require('./data/project-router.js');


server.get('/',(req,res,next)=>{
    res.send(`Hello, from the server`);
})

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);


module.exports=server;