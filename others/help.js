const { MessageEmbed } = require("discord.js");

  const prefix = ("*");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(const prefix = ("*"));
    .setColor('RANDOM')
    .setTitle("**__Help__**")
  .setImage( "https://cdn.discordapp.com/attachments/766626265448316938/782382346933501962/image0.gif")
  .setDescription(`**[  SUPPORT  ](https://discord.gg/BgFvGtX5p8)**   -   **[   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=782206819728228382&permissions=1677197121&scope=bot)

prefix=\`${prefix}\`

Others

\`${prefix}help\`      \`${prefix}ping\` 
\`${prefix}prefix\`    \`${prefix}uptime\`

Music

\`${prefix}filter(fi)\`-\`${prefix}loop (l)\`-\`${prefix}lyrics (ly)\`-\`${prefix}np\`
\`${prefix}pause\`-\`${prefix}play(p)\`-\`${prefix}queue(qu)\`-\`${prefix}radio\`-\`${prefix}remove\`
\`${prefix}resume (r)\`-\`${prefix}search\`-\`${prefix}shuffle(mix)\`-\`${prefix}skip(s)\`-\`${prefix}skipto(st)\`-\`${prefix}stop\`
\`${prefix}volume(vol)\`


**`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
