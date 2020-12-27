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
  .setDescription(`**[  SUPPORT  ](https://discord.gg/BgFvGtX5p8)**   -   **[   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=792369278103453709&permissions=3209984&scope=bot)

prefix=\`${_}\`

Others

\`${_}help\`      \`${_}ping\` 
\`${_}prefix\`    \`${_}uptime\`

Music

\`${_}filter(fi)\`-\`${_}loop (l)\`-\`${_}lyrics (ly)\`-\`${_}np\`
\`${_}pause\`-\`${_}play(p)\`-\`${_}queue(qu)\`-\`${_}radio\`-\`${_}remove\`
\`${_}resume (r)\`-\`${_}search\`-\`${_}shuffle(mix)\`-\`${_}skip(s)\`-\`${_}skipto(st)\`-\`${_}stop\`
\`${_}volume(vol)\`


__`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
