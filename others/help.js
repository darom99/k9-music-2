const { MessageEmbed } = require("discord.js");

  const prefix = ("/");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("**__bot help menu__**")
  .setImage( "https://cdn.discordapp.com/attachments/766626265448316938/782382346933501962/image0.gif")
  .setDescription(`**[  SUPPORT  ](https://discord.gg/ujsQgfe)**   -   **[   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=755768592104030208&permissions=1849163585&scope=bot)


${prefix}help (h) 

${prefix}loop (l) \`Toggle music loop\` 

${prefix}lyrics (ly) \`Get lyrics for the currently playing song\`

${prefix}np \`Show now playing song\`

${prefix}pause \`Pause the currently playing music\`

${prefix}play (p) \`Plays audio from YouTube or Soundcloud\`

${prefix}playlist (pl) \`Play a playlist from youtube\`

${prefix}pruning \`Toggle pruning of bot messages\`

${prefix}queue (q) \`Show the music queue and now playing\`

${prefix}remove (rm) \`Remove song from the queue\`

${prefix}resume (r) \`Resume currently playing music\`

${prefix}search \`Search and select videos to play\`

${prefix}shuffle \`Shuffle queue\`

${prefix}skip (s) \`Skip the currently playing song\`

${prefix}skipto (st) \`Skip to the selected queue number\`

${prefix}stop \`Stops the music\`

${prefix}volume (v) \`Toggle music loop\`    
                  
**`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
