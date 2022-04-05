const Discord = require("discord.js")
require("dotenv").config()

const generateImage = require("./generateImage")

const TOKEN = "OTYwNjA1MDYzMjE3MjgzMTAy.Yks3Lg.9-3GvTxRs9rRavY0sZA-lL9rEkg"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
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

const welcomeChannelId = "922768239824633872"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)