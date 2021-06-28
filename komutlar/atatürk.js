const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('"Her ülkenin bir kurucusu vardır ancak her ülkenin Atatürkü yoktur! Mustafa Kemal Atatürkü Sevgi ve Rahmetle Anıyoruz ❤')
    .setColor()
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
//MGS
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};