"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on("connection", (socket) => {
    socket.send("Connected");
    socket.on("message", (msg) => {
        if (msg.toString() === "ping") {
            socket.send(`You're pinged!`);
        }
        socket.send(`Received: ${msg.toString()}`);
        console.log(msg.toString());
    });
});
