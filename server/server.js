const express = require('express');
const socketIO = require('socket.io');
const http = require('http');//necesario para los socket.io para levantar un servidor node

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3001;

app.use(express.static(publicPath));

// IO = esta es la comunicación del backend
module.exports.io = socketIO(server);//el module exports es para poder usarlo en el socket.js
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});