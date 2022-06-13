const { Client, Intents, Message } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const tokenBot = "OTg0MjA3MTEwODc3MzY0MzI0.GKq1IC.jkTJfziWsZOEJ2Aa5F3y_1K5u3ce_aziGhyQHo"

client.login(tokenBot)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

//Comandos:

const  dimeLaHora = "!hora"

client.on("message", message => {
    let date = new Date()
    let hora = date.getHours()
    let minutos =  date.getMinutes()
    let segundos = date.getSeconds()
    let horario = hora + ":" + minutos + ":" + segundos
    if(message.content == dimeLaHora)
    message.reply(`Hola ${message.author.username} la hora es ${hora}`)
})

