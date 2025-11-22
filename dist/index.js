"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    console.log("New client connected");
    socket.on("message", (msg) => {
        socket.send(`${new Date().getUTCHours()} :${msg.toString()}`);
        // socket.send(`Received: ${msg.toString()}`)
        console.log(msg.toString());
    });
}).on("listening", () => {
    console.log("WebSocket server is listening on ws://localhost:8080");
});
