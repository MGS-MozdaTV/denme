const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor("OLAY VAR DEDİLER GELDİK KARDEŞ HAYIRDIR ")
    .setColor()
    .setTimestamp()
    .setDescription('')
        .setImage(`http://i.milliyet.com.tr/YeniAnaResim/2012/03/02/fft99_mf2054235.Jpeg`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["olayvar , olay-var"],
  permLevel: 0
};

exports.help = {
  name: 'olayvar',
  description: 'Olayvar.',
  usage: 'çayiç'
};