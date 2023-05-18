import { SlashCommandBuilder } from 'discord.js'
import { command } from '../../utils'

const meta = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get the latency of the bot")

export default command(meta, async ({ interaction }) => {
    return interaction.reply({
        ephemeral: true,
        content: `Pong! 🏓 ${interaction.client.ws.ping}ms`
    })
})