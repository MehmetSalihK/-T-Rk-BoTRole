const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'admin-messajı');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Sunucumuza katılan kişi : ', `${member}`)
        .addField(':microphone2: | Hoşgeldiniz!', `Sunucuya hoşgeldin, ${member}`)
        .addField(':id: | Kullanıcı :', "**[" + `${member.id}` + "]**")
        .addField(':family_mwgb: | Sunucumuzda ', `${member.guild.memberCount}` + "cu sıradasınız")
        .addField("Isim", `<@` + `${member.id}` + `>`, true)
        .addField('Sunucu', `${member.guild.name}`, true )
        .setFooter("Yardım için [-yardim]", "https://imgur.com/w0z6lI3.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "katıldı" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'admin-messajı');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Isim:', `${member}`)
        .addField('Neden ?', 'Hayırdır Laaaan kim uzdu seni')
        .addField('Bye Bye :(', 'Yolun açık olsun kardeşim!')
        .addField('Sunucuda şimdi', `${member.guild.memberCount}` + "kişi var")
        .setFooter("Yardım için [-yardim]", "https://imgur.com/w0z6lI3.png")
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "ayrıldı" + `${member.guild.name}` + "Şimdi mesaj bırakın")
    console.log("Mesajın Gönderildi")
});

const token = process.env.TOKEN;
bot.login("NDQ1NjQxMTU5MjM1MzM4MjQw.DesDJw.b2UYAgxgpBst3amFvkfE4nGHFns")
