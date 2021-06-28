const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username + `  Kahkaha Attı!`)
    .setColor()
    .setDescription('')
  .setImage(`https://img-s1.onedio.com/id-5730994989df675866ea8504/rev-0/w-635/listing/f-jpg-gif-webp-webm-mp4/s-e01f451349267b689329cb1259654e2e5e3e5a0b.gif`)
    return message.channel.send(sunucubilgi);
    }

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kahkaha', 'smile'],
  permLevel: 0
};

exports.help = {
  name: 'kahkaha',
  description: 'Kahkaha Atarsınız.',
  usage: 'kahkaha'
};