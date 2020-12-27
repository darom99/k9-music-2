const { MessageEmbed } = require("discord.js");

  const prefix = ("_");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("__Help__")
  .setImage( "https://cdn.discordapp.com/attachments/792368491877498890/792512314620116992/image0.gif")
  .setDescription(`**[  SUPPORT  ](https://discord.gg/BgFvGtX5p8)**   - [   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=792369278103453709&permissions=3209984&scope=bot)

prefix=\`${prefix}\`

Others

\`${prefix}help\`      \`${prefix}ping\` 
\`${prefix}prefix\`    \`${prefix}uptime\`

Music

\`${prefix}filter(fi)\`-\`${prefix}loop (l)\`-\`${prefix}lyrics (ly)\`-\`${prefix}np\`
\`${prefix}pause\`-\`${prefix}play(p)\`-\`${prefix}queue(qu)\`-\`${prefix}radio\`-\`${prefix}remove\`
\`${prefix}resume (r)\`-\`${prefix}search\`-\`${prefix}shuffle(mix)\`-\`${prefix}skip(s)\`-\`${prefix}skipto(st)\`-\`${prefix}stop\`
\`${prefix}volume(vol)\`


`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
