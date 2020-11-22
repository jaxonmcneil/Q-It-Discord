require('./.env');
const QIt = require('./qit');
const qit = new QIt.QIt();

const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

const { Player } = require('discord-player');
const player = new Player(bot);
bot.player = player;

settings = {
    prefix: 'q'
}

bot.on('ready', () => {
    console.log('Q-It is online');
});

bot.on('message', msg => {
    const args = msg.content.split(/ +/);

    if(args.shift() !== settings.prefix) return;

    const command = args.shift().toLowerCase();
    console.info(`command called: ${command}`);

    if(!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, qit, args);
    } catch (error) {
        console.info(`error calling ${command}: ${error}`);
        msg.reply(`there was an error executing the command: ${command}`);
    }
});

bot.login(TOKEN);