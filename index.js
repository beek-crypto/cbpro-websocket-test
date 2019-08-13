require('dotenv').config();
const CoinbasePro = require('coinbase-pro');


const websocket = new CoinbasePro.WebsocketClient(
    ['BTC-USD'],
    process.env.SANDBOX_URL,
    {
        key: process.env.SANDBOX_KEY,
        secret: process.env.SANDBOX_SECRET,
        passphrase: process.env.SANDBOX_PASSPHRASE
    },
    { channels: ['heartbeat'] }
    );

websocket.on('message', data => {
  console.log('message');
  console.log(data);
});
websocket.on('error', err => {
    console.log('error');
    console.log(err);
});
websocket.on('close', () => {
    console.log('close');
});
