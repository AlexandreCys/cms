import * as io from 'socket.io-client';

const socket = io.connect(`${Config.base.url}:${Config.base.port}`, {
  reconnect: true,
  query: "type=cms",
});

socket.on('connect', () => { 
  console.log('Cms service connected')

  socket.emit('action', new getterMessageTransferObject('services', ['cms', 1]));
});
