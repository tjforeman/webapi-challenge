const express=require('express');

const server=express()
server.use(express.json());

server.get('/',(req,res,next)=>{
    res.send(`Hello, from the server`);
})

module.exports=server;