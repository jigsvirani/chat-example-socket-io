var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

//For message apeeal.
io.on('connection', function (socket) {

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    socket.on('isTyping', function (data) {
        var address = socket.handshake.address;
        console.log(address);
        socket.emit("isTyping", address);
        socket.broadcast.emit("isTyping", address);

    });




});

//For message typing apeeal.


http.listen(3000, function (msg) {
    console.log('listening on jigs server *:3000');

});
