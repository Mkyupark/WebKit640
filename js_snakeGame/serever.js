const http = require('http');
const express = require('express');
const app =express();

app.set('port',3000);

app.use(express.static(__dirname + '/public'));



const server = http.createServer(app)
server.listen(app.get('port'),() =>{
    console.log("서버실행중 : http://localhost:3000");
})