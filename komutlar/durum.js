const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Üyedurum")
    .setColor("BLACK")
   .addField("**Toplam Kullanıcı**",message.guild.memberCount )
  .setImage('https://cdn.discordapp.com/attachments/780520153749127171/825443222527541248/standard.gif')

    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "üyedurum",
  description: "",
  usage: ""
};
