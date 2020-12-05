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
    .setTitle("**__Help__**")
  .setImage( "https://cdn.discordapp.com/attachments/766626265448316938/782382346933501962/image0.gif")
  .setDescription(`**[  SUPPORT  ](https://discord.gg/ujsQgfe)**   -   **[   INVITE   ](https://discord.com/api/oauth2/authorize?client_id=755768592104030208&permissions=1849163585&scope=bot)

prefix=\`${prefix}\`

Others

${prefix}\`help\`      ${prefix}\`ping\` 
${prefix}\`prefix\`    ${prefix}\`uptime\`

Music

${prefix}\`filter(fi)\`-${prefix}\`loop (l)\`-${prefix}\`lyrics (ly)\`- \`${prefix}nowplaying(np)\`
${prefix}\`pause\`-${prefix}\`play(p)\`-${prefix}\`queue(qu)\`-${prefix}\`radio\`-${prefix}\`remove\`
${prefix}\`resume (r)\`-${prefix}\`search\`-${prefix}\`shuffle(mix)\`${prefix}\`skip(s)\`-${prefix}\`skipto(st)\`${prefix}\`stop\`
${prefix}\`volume(vol)\`


**`)
    

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
