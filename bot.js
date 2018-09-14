const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`WeAreOne||'$' `,"https://www.twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


var anti_spam = require("discord-anti-spam");
 
anti_spam(bot, {
  warnBuffer: 7,  //alpha codes 
  maxBuffer: 8,  //alpha codes
  interval: 1000,  //alpha codes
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  //alpha codes
  banMessage: "تم الطرد بسبب السبام",  //alpha codes
  maxDuplicatesWarning: 7, //alpha codes
  maxDuplicatesBan: 10  //alpha codes
});

bot.login(process.env.BOT_SPAM);

const bot1 = new Discord.Client();

 var anti_spam1 = require("discord-anti-spam");
anti_spam1(bot1, {
  warnBuffer: 7,  //alpha codes 
  maxBuffer: 8,  //alpha codes
  interval: 1000, //alpha codes 
  warningMessage: "**سيتم طردك إن لم توقف سبام**",  //alpha codes 
  banMessage: "تم الطرد بسبب السبام",  //alpha codes
  maxDuplicatesWarning: 7,  //alpha codes
  maxDuplicatesBan: 10  //alpha codes
});
 //alpha codes
 //alpha codes



client.login(process.env.BOT_TOKEN);
 
