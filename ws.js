var WebSocketServer = require('ws').Server,
  wss = new WebSocketServer({port: 40510})
var info = "test";
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    if(message != null){info = message
    console.log('received: %s', message)}

  });

  setInterval(
    () => ws.send(JSON.stringify(info)),
    1000
  )
})
