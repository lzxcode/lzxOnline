const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const WebSocket = require("ws");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
require("./routes/index")(app);
require("./plugins/db")(app);

const wss = new WebSocket.Server({ port: 3334 });

wss.on("connection", (ws) => {
  console.log('新的websocket');
  ws.on("message", (message) => {
    if ((message = "我想要地址")) {
      setInterval(() => {
        ws.send("12345,23456");
      }, 1000);
    }
  });
  ws.on('close',() => {
    console.log('WebSocket关闭');
  })
  ws.send("Hello! Message From Server!!");
});

app.listen(3333, () => {
  console.log("ok");
});
