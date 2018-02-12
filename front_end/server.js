const express = require('express');
const server = express();
server.use(express.static('build'));
const cors = require('cors');

server.use(cors());

server.listen(3000, function(){
  console.log("Listening on port 3000");
});
