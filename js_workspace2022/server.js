// socket.io를 사용해보기

const http = require('http');
const express = require('express');
const app = express();


const cors = require('cors');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// public 폴더 ststic 설정.
app.use(express.static(__dirname + 'public'));

//서버와 express 포트 같게 해준다.
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000");
});


//클라이언트에서 연결이되면 실행이 된다.
io.sockets.on('connection', function(socket){
    // socket 매개변수 - 클라이언트 소캣.
    console.log(">>> 클라이언트 소켓 접속!!");

    socket.emit('news', 'hello');
    socket.on('clientmessage', function(data){
        console.log('client message : ' + data);
    })
})