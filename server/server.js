// server.js
const ENV = process.env.ENV || "development";
const express = require('express');
const SocketServer = require('ws').Server;
const uuid = require('node-uuid');
const knexConfig    = require("./knexfile");
const knex          = require("knex")(knexConfig[ENV]);

// Set the port to 3001
const PORT = 3001;

// Create a new express server
const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

 var peeps = knex.select().from('users').then( (data) => {
    console.log(data);
  });

// Create the WebSockets server
const wss = new SocketServer({ server });

// Send data object to each connected client
wss.broadcast = function broadcast(data) {
  wss.clients.forEach(function each(client) {
    client.send(JSON.stringify(data));
  });
};

// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by
// the ws parameter in the callback.
let usersOnline = 0;
wss.on('connection', (ws) => {
  console.log('Client connected');
  usersOnline += 1;

  // Call broadcast with usercount object
  wss.broadcast({
    type: 'userCount',
    info: {
      usersOnline: usersOnline
    }
  });

  ws.on('message', function incoming(newCF) {
    let chatFields = JSON.parse(newCF);
    chatFields.info.id = uuid.v1();


    if (chatFields.type === 'postMessage'){
    chatFields.type = 'incomingMessage';
    }

    if (chatFields.type === 'postNotification'){
    chatFields.type = 'incomingNotification';
    }

    // Call broadcast with chatFields object
    wss.broadcast(chatFields);
  });

  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected');
    usersOnline -= 1;

    // Call broadcast with usercount object
    wss.broadcast({
      type: 'userCount',
      info: {
        usersOnline: usersOnline
      }
    });

  });
});

