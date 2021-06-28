const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.MessageEmbed()
  .setAuthor("Alkış'la VorteX")
  
  .setColor("BLACK")
  .setImage("https://media1.tenor.com/images/66e25c15d969c51a9158637959fcec04/tenor.gif?itemid=9872650%22")

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Bot Alkışlar',
  usage: 'alkış'
};