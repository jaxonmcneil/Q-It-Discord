require('dotenv').config();

const Discord = require('discord.js');
const { Player } = require('discord-player');

const bot = new Discord.Client();
const player = new Player(bot);

settings = {
    prefix: 'q'
}

bot.on('ready', () => {
    console.log('Q-It is online');
});

bot.on('message', async (message) => {
    const args = message.content.slice(settings.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'it') {
        console.log("let's party!");
    }
    
})

bot.login(TOKEN);