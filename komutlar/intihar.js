const Discord = require('discord.js')
exports.run = async (client, message, args) => {
  
  
    let intiharsebep = args.join(" ");
    if(intiharsebep.length < 1) {
    return message.reply('**Neden İntihar Ettiğini Belirtmelisin.**')
    } else {    
   message.delete()
  const intihar = new Discord.MessageEmbed()
      .setColor("0xe2ff00")
      .setTitle('**İntihar Girişimi!**')
      .setDescription(`:cry: ${message.author.username} │ **Adlı Kullanıcı **${intiharsebep}** Yüzünden İntihar Etti! :cry:**`)
      .setImage(`https://i.pinimg.com/originals/a6/0f/7e/a60f7e664cf65648618a3fe8aec39dbd.gif`)
      .setTimestamp()
      message.channel.send(intihar);
    
    }
    
    
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['intiharet'],
    permLevel: 0,
  };
  
  exports.help = {
    name: 'intiharet',
    description: '',
    usage: 'intiharet <sebep>'
  };