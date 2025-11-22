import {WebSocketServer} from 'ws'

const wss = new WebSocketServer({port: 8080})



wss.on("connection", (socket)=>{
    console.log("New client connected")


    socket.on("message", (msg)=>{
       socket.send(`${new Date().getUTCHours()} :${msg.toString()}`)
        // socket.send(`Received: ${msg.toString()}`)

        console.log(msg.toString())
    })

}).on("listening", ()=>{
    console.log("WebSocket server is listening on ws://localhost:8080")
})