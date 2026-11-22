const express = require ('express');
const {createServer} = require('http');
const {Server}=require('socket.io');
const axios = require('axios');
require('dotenv').config();

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

app.post('/webhook', async(request, response)=>{
    console.log(JSON.stringify(request.body,null,2));
    response.sendStatus(200);

    const leadId = request.body.entry[0].changes[0].value.leadgen_id;
    const url = `https://graph.facebook.com/v27.0/${leadId}`;

    try{
        const result = await axios.get(url,{
            params:{
                fields:'id,created_time,field_data',
                access_token:process.env.PAGE_ACCESS_TOKEN,
            }
        });
        console.log('Lead Details:',result.data);
        const namefield = result.data.field_data.find(
            field => field.name === 'full_name'
        );
        const emailfield = result.data.field_data.find(
            field => field.name === 'email'
        );
        const phonefield = result.data.field_data.find(
            field => field.name === 'phone_number'
        );

        const lead = {
            id:result.data.id,
            full_name: namefield ? namefield.values[0] : null,
            email_id: emailfield ? emailfield.values[0] : null,
            phone_no: phonefield ? phonefield.values[0] : null,
            createdAt: result.data.created_time,
        }
        io.emit('newLead', lead);
    }
    catch(error){
        console.log('Error fetching lead details: ', error.response ? error.response.data : error.message);
    }
});

server.listen(port, () =>{
    console.log(`Server runnning at ${port}`);
});

io.on('connection', (socket)=>{
    console.log('Client: ', socket.id);
});