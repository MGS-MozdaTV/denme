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


.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **VorteX Bot ** ©️ **]▬▬▬▬▬▬**  \n\n> <a:555:847232522584457286> `.istatistik` **Botun istatistik bilgilerini açar.** \n> <a:555:847232522584457286> **Şuanda kullanılan prefix** `.`")
.setThumbnail("https://cdn.discordapp.com/attachments/802911941512134678/802928380492120104/ezgif.com-crop_5.gif")
.setDescription(`


▬▬▬▬▬▬[ <a:s_s:783775691748409424> **Kullanıcı Komutları** <a:s_s:783775691748409424> ]▬▬▬▬▬▬

> **» .avatar :** Avatarınızı Gösterir
> **» .id :** Birisinin İD Sini Alırsınız
> **» .kb :** Kullanıcı Bilgisini Gösterirsiniz
> **» .yapımcım :** Yapımcımı Gösterir.
> **» .taç :** Sunucunun Sahibini Gösterir
> **» .üyedurum :** Sunucudaki Üye Durumunu Gösterir
> **» .servericon :** Serverin iconunu gösterir

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
    name: 'kullanıcı', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'kullanıcı'
};