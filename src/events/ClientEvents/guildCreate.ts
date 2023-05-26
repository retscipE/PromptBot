import { event, Settings } from '../../utils'

export default event('guildCreate', async ({ log }, guild) => {
    if (await Settings.exists({ guildId: guild.id })) return;
    else {
        const guildSettings = new Settings({
            guildId: guild.id,
            economyEnabled: true,
            logsEnabled: true,
        })

        await guildSettings.save();
    }
})