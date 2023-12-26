import Koa from 'koa';
import { Server } from 'socket.io';

// 创建服务器
const app = new Koa();

//创建 webSocket 服务
const io = new Server({
  //设置跨域
  cors: {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
  },
});

//  存储连接上ws服务的客户端信息
const clients: any = {};

// 在 connection 完成后，持续监听 message
io.on('connection', function (ws) {
  ws.on('message', function (message) {
    let clientID;
    let roomID;
    switch (message.type) {
      // 如果 message 中携带的 type 是 connect
      case 'connect':
        // 将连接的客户端存储起来
        clientID = message.data.myID;
        roomID = message.data.roomID;
        console.log(`${clientID} has connected in ${roomID}`);
        // 存到 clients 对象里
        clients[clientID] = {
          clientID,
          roomID,
          ws,
        };
        ws.send(
          JSON.stringify({
            type: 'connect',
          }),
        );
        break;
    }
  });
});
