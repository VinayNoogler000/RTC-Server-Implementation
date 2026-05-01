const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log("Client Connected!");
    
    socket.send("Welcome to the WebSocket server!");

    socket.on("message", (message) => {
        console.log("Received message: " + message);
        socket.send("Hello From Server!");
    });
});

console.log("WebSocket server is running on ws://localhost:8080");