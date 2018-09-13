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

client.on('message', message => {
	if(message.author.bot) return;
var perfix = "$";
      if (message.content.startsWith(prefix + 'clear')) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`**You Don't Have**  *MANAGE_MESSAGES*  **Permission **`).catch(console.error);
    message.delete()
    if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);
   const messagecount = parseInt(args.join(' '));
   message.channel.fetchMessages({
     limit: messagecount
 }).then(messages => message.channel.bulkDelete(messages));
    var embed = new Discord.RichEmbed()
        .setTitle('Êã ãÓÍ ÇáÔÇÊ ÈäÌÇÍ :white_check_mark: ')
        .setColor('RANDOM')
       message.channel.sendEmbed(embed).then(m => {
    m.delete(1000);
});
 };
 });

 
 client.on('message', message => {
	if(message.author.bot) return;
    if (message.content.startsWith("$info")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO ???????.? Bot`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true) 
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
            .addField("``Your Name``", `${message.author.username}`)
            .addField('``your tag``', message.author.discriminator)
            .addField('``Your id``', message.author.id)
            .addField('``Bot``', message.author.bot)
            .addField('``date of registration``', message.author.createdAt)
    })
}
});


client.on('message', msg => {
	if(msg.author.bot) return;
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**ãäÔä ÇáÔÎÕ ÇæáÇ**`)
      if (!args[1]) return msg.reply(`**ãÇ åí ÇáÑÓÇáå ÇáãØáæÈ ÇÑÓÇáåÇ**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**íÌÈ ÊÍÏíÏ ÇáÔÎÕ**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`**ÑÓÇáÉ ÌÏíÏÉ:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**Êã ÇÑÓÇá ÇáÑÓÇáå**`)
    }
});


client.on('message', message => {
    if (message.author.bot) return;
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? ??   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});






client.on('message', message => {
	if(message.author.bot) return;
              if(!message.channel.type === 'dm') return;
    if(message.content.startsWith(prefix + "bc")) {
    if(!message.channel.guild) return message.channel.send('**åÐÇ ÇáÃãÑ ÝÞØ ááÓíÑÝÑÇÊ**').then(m => m.delete(5000));
  if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**ááÃÓÝ áÇ ÊãÊáß ÕáÇÍíÉ** `ADMINISTRATOR`' );
    let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
    let copy = "3Bkre_Bot";
    let request = `Requested By ${message.author.username}`;
    if (!args) return message.reply('**íÌÈ Úáíß ßÊÇÈÉ ßáãÉ Çæ ÌãáÉ áÅÑÓÇá ÇáÈÑæÏßÇÓÊ**');message.channel.send(`**åá ÃäÊ ãÊÃßÏ ãä ÅÑÓÇáß ÇáÈÑæÏßÇÓÊ¿ \nãÍÊæì ÇáÈÑæÏßÇÓÊ:** \` ${args}\``).then(msg => {
    msg.react('?')
    .then(() => msg.react('?'))
    .then(() =>msg.react('?'))
    
    let reaction1Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
    let reaction2Filter = (reaction, user) => reaction.emoji.name === '?' && user.id === message.author.id;
          let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
    let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
    reaction1.on("collect", r => {
    message.channel.send(`? | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
    message.guild.members.forEach(m => {
    var bc = new
       Discord.RichEmbed()
       .setColor('RANDOM')
       .addField('ÇáÓíÑÝÑ', message.guild.name)
       .addField('ÇáãÑÓá ', message.author.username)
       .addField('ÇáÑÓÇáå', args)
       .setThumbnail(message.author.avatarURL)
       .setFooter(copy, client.user.avatarURL);
    m.send({ embed: bc })
    msg.delete();
    })
    })
    reaction2.on("collect", r => {
    message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
    msg.delete();
    })
    })
    }
    });





client.on("message", msg => {
	if(msg.author.bot) return;
	if(msg.channel.type === 'dm') return;
  if(msg.content.startsWith (prefix + "id")) {
    if(!msg.channel.guild) return msg.reply('**:x: ÇÓÝ áßä åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ **');
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  ÇáÇÓã", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  ÇáÇíÏí", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  ÇáÍÇáÉ', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   íáÚÈ', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  ÇáÑÊÈ', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  åá åæ ÈæÊ', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
        }
});


client.on('message', message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
        if (message.content === "$invite") {
        let embed = new Discord.RichEmbed()
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)      
        .setTitle(`:small_orange_diamond: Click Here `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=337702789285150720&permissions=8&scope=bot`)        
     message.channel.sendEmbed(embed);
       }
   }); 


client.on('message', message => {
	if(message.author.bot) return;
     if (message.content === "$support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField("  :gear: Server Support :gear: " , "  https://discord.gg/6Gg666U")


  message.channel.sendEmbed(embed);
    }
}); 



client.on('message', message => {   
if (message.author.boss) return;
var prefix = "$";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("ÇäÊ áÇ Êãáß ÕáÇÍíÇÊ !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("ÇáÈæÊ áÇíãáß ÕáÇÍíÇÊ ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find(r => r.name === "Muted");
if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  ÇáãÓÊÎÏã**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  Êã ÈæÇÓØÉ **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  ÇáÓÈÈ**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} ÇäÊ ãÚÇÞÈ ÈãíæÊ ßÊÇÈí ÈÓÈÈ ãÎÇáÝÉ ÇáÞæÇäíä 
 ${message.author.tag} ÊãÊ ãÚÇÞÈÊß ÈæÇÓØÉ
[ ${reason} ] : ÇáÓÈÈ
ÇÐÇ ßÇäÊ ÇáÚÞæÈÉ Úä ØÑíÞ ÇáÎØÃ Êßáã ãÚ ÇáãÓÄáíä 
`)
.setFooter(`Ýí ÓíÑÝÑ : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}  
});  


client.on("message", message => {
  if (message.author.bot) return;
 
  let command = message.content.split(" ")[0];
 
  if (command === "$unmute") { // ÍØ ÇáÈÑÝßÓ ÍÞÊ ÈæÊß ÞÈá ÇáÇãÑ
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** áÇ íæÌÏ áÏíß ÈÑãÔä 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find(c => c.name === 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find(r => r.name === 'Muted');
  if (!muteRole) return message.reply("** áÇ íæÌÏ ÑÊÈÉ ÇáãíæÊ 'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** íÌÈ Úáíß ÇáãäÔä ÇæáÇð **').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('ÇáÃÓÊÚãÇá:', 'ÇÓßÊ/ÇÍßí')
    .addField('Êã Ýß ÇáãíæÊ Úä:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('ÈæÇÓØÉ:', `${message.author.username}#${message.author.discriminator}`)
 
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** áÇ íæÌÏ áÏí ÈÑãÔä Manage Roles **').catch(console.error);
 
  if (message.guild.member(user).removeRole(muteRole.id)) {
      return message.reply("** Êã Ýß ÇáãíæÊ Úä ÇáÔÎÕ ÇáãÍÏÏ  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** Êã Ýß ÇáãíæÊ Úä ÇáÔÎÕ ÇáãÍÏÏ .. **").catch(console.error);
    });
  }
 
};
 
})


client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    var reason = args.slice(2).join(" ");
    
    if(command == prefix + 'ban') {
        if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**ÇäÊ áÇ Êãáß ÇáÕáÇÍíÇÊ ÇáãØáæÈå**");
        if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");

        var userM = message.mentions.users.first() || message.guild.members.get(args[1]);
        
        if(!userM) return message.reply("**ãäÔä ÔÎÕ**");
        if(!message.guild.member(userM).bannable) return message.reply("**íÌÈ Çä Êßæä ÑÊÈÉ ÇáÈæÊ ÇÚáí ãä ÑÊÈå ÇáÔÎÕ ÇáãÑÇÏ ÊÈäíÏÉ**");
        
        if(!reason) reason = 'No reason.';
        
        message.guild.member(userM.user).ban(7, userM.user);
        message.channel.send(`**:white_check_mark: <@${userM.id}> banned from the server ! Reason: \`\`${reason}\`\` :airplane:**`);
    }
});



client.on('message', message => {
    if(message.author.bot) return;
    if(message.content.type === 'dm') return;
    
    var command = message.content.toLowerCase().split(" ")[0];
    var args = message.content.split(" ");
    
    var userID = args[1];
    
    if(command == prefix + 'unban') {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('ÇäÊ áÇ ÊãÊáß ÇáÕáÇÍíÉ ÇáßÇÝíå');
        if(!userID) return  message.channel.send('**ÇßÊÈ ÇíÏí ÇáÔÎÕ**');
        if(isNaN(userID)) return message.reply('**íÌÈ Çä íßæä ÇíÏí ÇáÔÎÕ ãä ÇÑÞÇã ÝÞØ**');
        if(userID.length < 16) return message.reply('**åÐÇ áíÓ ÇíÏí ÔÎÕ**');
        message.guild.fetchBans().then(bans => {
            var Found = bans.find(m => m.id === userID);
            if(!Found) return message.reply('**åÐÇ ÇáÔÎÕ áíÓ áÏíå ÈÇäÏ Ýí åÐÇ ÇáÓíÑÝÑ**');
            message.guild.unban(userID);
            message.channel.send(`:white_check_mark: <@${userID}> **unbanned from the server !**`);
        })
    }
});


client.on('message', message => {
  if (message.author.bot) return;
const prefix = "$";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("ãäÔä ÔÎÕ");
  if(!reason) return message.reply ("ÇßÊÈ ÓÈÈ ÇáØÑÏ");
  if (!message.guild.member(user)
  .bannable) return message.reply("áÇíãßääí ØÑÏ ÔÎÕ ÇÚáì ãä ÑÊÈÊí");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("485488228887953448").send({embed : banembed})
}
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
message.reply('**Ôíß Úáì ÇáÎÇÕ !! :mailbox_with_mail: **')
	
		 


 message.author.sendMessage(`
__~~WeAreOne~~__ By: ! MO3AZ ?#1599
??????????????????????
??????????????????????
????????????????????????????
????????????????????????????
????????????????????????????
????????????????????????????
?[??????????????]?
             Prefix = ' $ '
?[??????????????]?
?[??????????????]?
             Admin Commands
?[??????????????]?
? $bc <message> ? message all members in server
? $mute <user> <time> <reason> ? mute from server
? $unmute <user> ? unmute from server
? $kick <user> <reason> ? kick from server
? $clear <number> ? clear chat
? $ban <mention> <reason> ? ban member from server
? $unban <id> ? unban from server
?[??????????????]?
            General  Commands
?[??????????????]?
? $id ? your id
? $report ? to report someone in server
? $info ? user & bot informations 
? $bot ? bot informations
? $server ?  informations
? $invite ? bot invite link
? $support ? server support link
? $msg ?  for send msg for someone by bot
? $msg ?  for send msg for someone by bot
==================================================================
Server support: https://discord.gg/6Gg666U
==================================================================
bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=20337702789285150720%20&scope=bot&permissions=269671551
==================================================================
`);

    }
});  

client.on('message' , message => {
if (message.author.bot) return;
if (message.content.startsWith("$sug")) {
          if(!message.channel.guild) return message.reply('åÐÇ ÇáÇãÑ ááÓíÑÝÑÇÊ ÝÞØ')
      if (message.author.bot) return;
            if (!message.channel.guild) return;
            let args = message.content.split(" ").slice(1).join(" ");

                var xsatt = new Discord.RichEmbed()
                .addField('** ÇáÜÓíÑÝÑ**', `${message.guild.name}`,true)
            .addField(' **ÇáÜãÑÓá **', `${message.author.username}#${message.author.discriminator}`,true)
            .addField(' **ÇáÑÓÇáÉ** ', args)
              .setThumbnail(message.guild.iconURL)
              .setColor('RANDOM')
              client.users.get("278943398713622540").send({embed: xsatt});

            let embed = new Discord.RichEmbed()
               .setAuthor(message.author.username, message.author.avatarURL)
               .setColor("RANDOM")
               .setDescription(' ? | **__ Êã ÇÑÓÇá ÇáÃÞÊÑÇÍ Çáì ÕÇÍÈ ÇáÈæÊ __**')
               .setThumbnail(message.author.avatarURL)


          message.channel.send(embed);
        }});

client.on('message', message =>{
if (message.author.bot) return;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let prefix = '$';
     
    if(cmd === `${prefix}report`){
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send("Idk who 2 report ??");
        let reason = args.join(" ").slice(22);
        if(!reason) return message.channel.send("What is the reason ??");
    
        let reportEmbed = new Discord.RichEmbed()
        .setTitle("User just reported...")
        .setColor("RANDOM")
        .addField("- Reported User :", `${rUser} (${rUser.id})`)
        .addField("- Reported By :", `${message.author} (${message.author.id})`)
        .addField("- Reported In :", message.channel)
        .addField("- Report Time :", message.createdAt.toLocaleString(),true)
        .addField("- Reason :", reason);
    
        let reportschannel = message.guild.channels.find(c => c.name === "reports");
        if(!reportschannel) return message.channel.send("You should to make `reports` channel.");
    
    
        message.delete().catch(O_o=>{});
        message.author.send(`<@${rUser.id}>, Reported Successfully!!`)
        reportschannel.send(reportEmbed);
    };
});




client.on("message", message => {
    if(message.content.startsWith(prefix + 'room')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` ááÃÓÝ åÐå ÇáÎÇÕíÉ ÊÍÊÇÌ Çáì ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> íÌÈ Úáíß ÇÏÎÇá ÇÓã`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // ßá 60 ÊÓÇæí ÏÞíÞÉ ÚÏá ÚáíåÇ ÇáæÞÊ áí ÊÈíå 
      message.channel.send(`? TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ?  ÇäÊåì æÞÊ ÇáÑæã ÇáÕæÊí`), 120000))  // 120000 ÏÞíÞÊÇä
    }
    });


client.login(process.env.BOT_TOKEN);
 
