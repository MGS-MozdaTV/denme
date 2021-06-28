const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()


.setColor("AQUA")
.setTitle("**▬▬▬▬▬▬[** ©️ **VorteX Bot ** ©️ **]▬▬▬▬▬▬**  \n\n> <a:555:847232522584457286> `.istatistik` **Botun istatistik bilgilerini açar.** \n> <a:555:847232522584457286> **Şuanda kullanılan prefix** `.`")
.setThumbnail("https://cdn.discordapp.com/attachments/802911941512134678/802928380492120104/ezgif.com-crop_5.gif")
.setDescription(`


▬▬▬▬▬▬[ <a:ust:847513575877902386> **Genel Komutlar** <a:ust:847513575877902386> ]▬▬▬▬▬▬

> **» .yılbaşı :** Yeni Yıla Kalan Süreyi Gösterir.
> **» .çeviri :** Yazdıgınız Kelimeyi Türkçeye Çevirir
> **» .saat :** Türkiyenin Saatini Gösterir
> **» .youtube :** Yazdıgınız Kelimeyi Youtubda Aratır


**▬▬▬▬▬▬[** <a:ayar:847496139975557120> **Bilgilendirme** <a:ayar:847496139975557120> **]▬▬▬▬▬▬**

> <a:ww:847500750962819152> **Fikirlerinizi Belirtmekten Çekinmeyin**
> <a:tac:847496141414465546> **Discord Js Sürümü : 12.5.0**
> <a:uzay:783775812867981322> **Yapımcım : MGS-MozdaTV**
`)
 
return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'genel', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'genel'
};