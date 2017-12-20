const express = require("express");
const handler = require("./httpHandler")
const appController = require("./appController");

const server = express();

server.use("/client", express.static("./jquery-mockup"))
server.use("/old", handler.main);
server.use("/game", appController.router );
    

server.listen(3001);

console.log("http://localhost:3001");