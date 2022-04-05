const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYwNjA1MDYzMjE3MjgzMTAy.Yks3Lg.9-3GvTxRs9rRavY0sZA-lL9rEkg"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "LFG"){
        message.reply("TO THE MOON")
    }
})

client.login(process.env.TOKEN)