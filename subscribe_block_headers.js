const dotenv = require('dotenv').config();
const WebSocket = require('ws');

const ws = new WebSocket(`wss://mainnet.infura.io/ws/v3/${process.env.PROJECT_ID}`);
	ws.on('open', function open() {
	ws.send('{"jsonrpc":"2.0","method":"eth_subscribe","params":["newHeads"], "id":1}');
});

ws.on('message', function incoming(data) {
	var obj = JSON.parse(data);
	console.log(obj);
	ws.close()
});
