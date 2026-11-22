const express = require ('express');
const {createServer, request} = require('http');
const {Server}=require('socket.io');

const app=express();
app.use(express.json());

const server = createServer(app);

const io = new Server(server, {
    cors:{
        origin:'*',
    },
});

const port = 3000;

app.get('/webhook', (request, response)=>{
    const mode = request.query['hub.mode'];
    const token = request.query['hub.verifyToken'];
    const challenge = request.query['hub.challenge'];

    if(mode === 'subscribe' && token == process.env.VERIFY_TOKEN){
        console.log('Webhook verified');
        response.status(200).send(challenge);
    }
    else{
        console.log('Error verifying webhook');
        response.sendStatus(403);
    }
});

app.post('/webhook', (request, response)=>{
    console.log(JSON.stringify(request.body,null,2));
    response.sendStatus(200);
});

server.listen(port, () =>{
    console.log(`Server runnning at ${port}`);
});

io.on('connection', (socket)=>{
    console.log('Client: ', socket.id);
});