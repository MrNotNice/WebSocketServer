var WebSocketServer = require('ws').Server;
var  wss = new WebSocketServer({port: 3000});
var beaconData = "hello";

wss.on('connection', function (ws) {
  ws.on('message', function(message){
  if(message != null){
    beaconData = message;
  }
  });
  setInterval(
   () => ws.send(JSON.stringify(beaconData)),
   1000
)
});
