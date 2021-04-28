const dotenv = require('dotenv');
const { Client, MessageEmbed } = require('discord.js');

const client = new Client();

dotenv.config();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	//console.log(message.author.username + ': ' + message.content);
	
	if (message.content === '!ping') {
		message.channel.send('Pong.');
	} else if (message.content === '!avatar') {
		message.channel.send('This is your avatar, ' + message.author.username + '! :grinning:');
		message.channel.send(message.author.displayAvatarURL());
	} else if (message.content === '!like'){
		message.react('👍');
		message.reply('I like You! :+1:');
	}
});

client.login(process.env.TOKEN);