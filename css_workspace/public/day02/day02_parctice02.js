const http = require('http');
const express =require('express');
const app =express();



const server = http.createServer(app);
server.listen(3001, function() {
    console.log("서버 실행 중>>> http://localhost:3001");
});