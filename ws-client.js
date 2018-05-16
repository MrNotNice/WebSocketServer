var ws = new WebSocket("wss://websocket-server-2018.herokuapp.com");
var info = ["Saab", "Volvo", "BMW"];
ws.onopen = function(){
  setTitle("Connected");
  ws.send(JSON.stringify(info));
};



ws.onmessage = function(info){
  console.log(info.data);
};



function setTitle(title){
  document.querySelector('h1').innerHTML = title;
};
