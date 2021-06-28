const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  const astralcode = new Discord.MessageEmbed()
  .setDescription('**Ping Hesaplanıyor**')
   let start = Date.now(); 
   let mesaj = await message.channel.send(astralcode)
    let diff = (Date.now() - start); 
    let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
        const astralcode = new Discord.MessageEmbed()
.setColor(``)
        .setDescription(`**Gecikme Süreleri**\nMesaj pingi: **${diff}ms** \nBot pingi: **${API}ms**`)
        mesaj.edit(astralcode);
      
    }, 5000)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun Pingin, Ölçer',
  usage: 'ping'
};