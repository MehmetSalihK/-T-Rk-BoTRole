const Discord = require("discord.js");
const client = new Discord.Client();

const TOKEN = "NDQ1NjQxMTU5MjM1MzM4MjQw.DdtbRA.O8V8ZLlhFnPBUJf7fO7zH818qT4";
const ownerID = "174565176492687361"
const PREFIX = "-";

var bot = new Discord.Client();

var servers = {};

bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "genel").send(`__**${member.guild.name}**__ **sunucu'ya katilan** __**${member.user.username}**__ **şimdi bizimle beraber!**`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "genel").send(`__**${member.user.username}**__ **artık bizim sunucumuzda** __**${member.guild.name}**__ **değil**`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find("name", "👤YENI👤");
    member.addRole(role)
})

bot.login(TOKEN);
