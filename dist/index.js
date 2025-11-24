"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
const allClients = [];
wss
    .on("connection", (socket) => {
    console.log("New client connected");
    allClients.push(socket);
    socket.on("message", (msg) => {
        console.log(`Received message: ${msg}`);
        setTimeout(() => {
            allClients.forEach((client) => {
                client.send(`Server response: ${msg.toString()}`);
            });
        }, 2000);
    });
})
    .on("listening", () => {
    console.log("WebSocket server is listening on ws://localhost:8080");
});
