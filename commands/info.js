const Discord = require("discord.js");
const config = require("../config");
const prefix = config.prefix;
const moment = require("moment");
require("moment-duration-format");

module.exports = {
 name: "info",
 aliases: ["botinfo", "clientinfo"],
 description: "Show client info for developers",
 category: "General",
 usage: "info",
 run: async (client, message, args) => {
  try {
   const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
   const embed = new Discord.MessageEmbed()
    .setTitle(`Information for developers`, message.guild.iconURL({ dynamic: true, format: 'png'}))
    .setColor("RANDOM")
    .setDescription(`My prefix is: \`${config.prefix}\`\n`)
    .addField('Head developer', `${config.author} [Portfolio](${config.authorwebsite})`)
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
    .addField('Node', `${process.version}`)
    .addField('OS', `Ubuntu 20.04 (Linux)`)
    .addField('Stack', `20 (Support date: 01.04.2025)`)
    .addField('Uptime', `${duration}`)
    .addField('Guild Count', `${client.guilds.cache.size}`)
    .addField('User Count', `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0)}`)
    .addField('Channel Count', `${client.channels.cache.size}`)
    .addField('Memory Usage', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB RAM`)
    .addField('Useful Links', `[Official server](${config.server}) | [Web-Panel](${config.website}) | [Invite me](https://discord.com/oauth2/authorize/?permissions=8&scope=bot&client_id=${client.user.id})`)
    .setFooter("Requested by " + `${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png', size: 2048 }))
   message.channel.send(embed);
  } catch(err) {
   message.channel.send({embed: {
    color: 16734039,
    description: "Something went wrong... :cry:"
   }})
  }
 }
}
