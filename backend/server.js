const express = require ('express');
const {createServer} = require('http');
const {Server}=require('socket.io');

const app=express();
const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin:'*',
    },
});

const port = 3000;
server.listen(port, () =>{
    console.log(`Server runnning at ${port}`);
});

io.on('connection', (socket)=>{
    console.log('Client: ', socket.id);
});