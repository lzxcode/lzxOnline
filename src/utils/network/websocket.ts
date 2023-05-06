var ws = new WebSocket("ws://localhost:3334");
ws.onopen = function (e) {
  console.log("连接服务器成功");
  // 向服务器发送消息
  // ws.send("我想要地址");
};
ws.onclose = function (e) {
  console.log("服务器关闭");
};
ws.onerror = function () {
  console.log("连接出错");
};
// 接收服务器的消息
ws.onmessage = function (e) {
  console.log(e.data);
};
let a = 2345;

export { a };
export let b = 2345;;
