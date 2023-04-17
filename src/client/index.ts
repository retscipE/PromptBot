import { GatewayIntentBits, Partials } from 'discord.js'
import SwedenClient from './SwedenClient'
import { registerEvents } from '../utils'
import events from '../events'
import keys from '../keys'

const client = new SwedenClient({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
    ],
    partials: [
        Partials.Channel
    ]
})

registerEvents(client, events)

client.login(keys.clientToken)
    .catch((err) => {
        console.error('[Login Error] ', err)
        process.exit(1)
    })
