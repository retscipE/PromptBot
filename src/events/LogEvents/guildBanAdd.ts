import { event, Settings } from '../../utils'

export default event('guildBanAdd', async ({ log }, guildBan) => {
    const { guild, user, reason } = guildBan;
    if (await Settings.exists({ guildId: guild.id })) return;
    const guildSettings = await Settings.findOne({ guildId: guild.id })
    if (!guildSettings?.logsEnabled) {

    }
})