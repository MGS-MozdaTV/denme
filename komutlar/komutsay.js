const Discord = require('discord.js');
exports.run = function(client, message, args) {
      const VorteX = new Discord.MessageEmbed()
      .setAuthor(`VorteX`)               
      .setDescription(client.commands.size || 0)
      .setColor('RANDOM')  
      message.channel.send(VorteX)
};  
exports.conf = {
  enabled: false, 
  guildOnly: false, 
  aliases: ['k'],
  permLevel: 0 
};
exports.help = {
  name: 'komutsay'
};