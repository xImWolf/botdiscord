const Discord = require('discord.js');
const client = new Discord.Client();
const exec = require('child_process').exec;

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
if(message.author.id !== "463024524263161877") return;

if(message.content.startsWith("!skema")) {
    exec(`${args.join(' ')}`, (error, stdout) => {
      const response = (error || stdout);
      message.channel.send(`Ran: ${args.join(" ")}\n${response}`, {code: "asciidoc", split: "\n"}).catch(console.error);
    });
}

});

client.login(process.env.TOKEN);
