import { Client, ClientOptions, Collection, Guild } from 'discord.js'

export default class SwedenClient extends Client {
    constructor(options: ClientOptions) { super(options) }

    public cooldown = new Collection<string, number>();
}