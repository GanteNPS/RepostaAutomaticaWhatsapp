var qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true},function (qrcode) {
    console.log(qrcode);
});
});

client.on('ready', () => {
    console.log('Client is ready!');
});
client.initialize();
client.on('message', message => {
	if(message.body !== 'MENSAGEM') { //Aqui no campo (MENSAGEM) é colocado a mensagem que aciona o disparo da mensagem
		client.sendMessage(message.from, 'Disparo');
	}
});
client.on('message', message => {
	console.log(message.body);
});
 

