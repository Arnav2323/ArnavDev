const express = require('express');
const server = express();
const port = 3000;

server.use(express.static('client'));
server.listen(port);