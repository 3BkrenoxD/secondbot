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

 client.on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'role')) {
        let member = message.mentions.users.first();
        let role = args.join(' ').replace(member, '').replace(args[0], '').replace(' ', '');
        console.log(role);
        if(member) {
              if(role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                console.log(roleRe);
                let role1 = message.guild.roles.find('name', roleRe);
                console.log(`hi`);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).removeRole(role1.id);
                
                     const e = new Discord.RichEmbed()
                     
                 .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'-'+role1.name+'**')
                .setFooter('Requested By '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else if(!role.startsWith('-')) {
                let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
                let role1 = message.guild.roles.find('name', roleRe);
const ee =new Discord.RichEmbed()
 .setDescription('**:x: I can’t find the role.**')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);                message.guild.member(member).addRole(role1);
                const e = new Discord.RichEmbed()
                
                .setDescription(':white_check_mark:** Changed Roles For **'+member+'**,** '+'**'+'+'+role1.name+'**')
                .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
                .setColor('BLACK')
                 message.channel.send(e)
            } else {
                message.reply(`يجب عليك كتابة اسم الرتبة`);
            } 
        }
 else if(args[0] == 'all') {
  if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }
    if(role) {
    let role1 = message.guild.roles.find('name', role);
    if(!role1) return;
    message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
        message.guild.members.forEach(m => {
            message.guild.member(m).addRole(role1);
        });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +  role1.name+`** Has Given To __${message.guild.members.size}__ Members **`);
    });
}
} else if(args[0] == 'humans') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Taken From __${message.guild.members.size}__ Member**`);
    });
  }

    if(role) {
        let role1 = message.guild.roles.find('name', role);

 const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == false).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...**`);
        });
    }
} else if(args[0] == 'bots') {
     if(role.startsWith('-')) { 
       let roleRe = args.join(' ').replace(member, '').replace(args[0], '').replace('-', '').replace(' ', '');
         let role1 = message.guild.roles.find('name', roleRe);
                   message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg =>{
           message.guild.members.forEach(m => {
            message.guild.member(m).removeRole(role1.id);
        });
         msg.edit(`** <a:like:472979723358699520>  Done...**`);
    });
  }
    if(role) {
        let role1 = message.guild.roles.find('name', role);
       const ee =new Discord.RichEmbed()
 .setDescription('I Cann’t Find This Role')
 .setFooter('Requested By : '+message.author.username,message.author.avatarURL)
        if(!role1) return message.channel.send(ee);
        message.channel.send(`الرجاء الانتظار حتى يتم الانتهاء من الامر`).then(msg => {
            message.guild.members.filter(m =>m.user.bot == true).forEach(m => {
                message.guild.member(m).addRole(role1);
            });
        msg.edit(`** <a:like:472979723358699520>  Done...\n**` +role1.name+`** Has Given To __${message.guild.members.size}__ Member**`);
});
}
}
}
});

client.login(process.env.BOT_TOKEN);
 
