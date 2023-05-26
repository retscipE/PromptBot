import {
    Model,
    Schema,
    model
} from 'mongoose'

export const Settings = model("settings", new Schema(
    {
        guildId: {
            type: String,
            required: true
        },
        economyEnabled: {
            type: Boolean,
            default: true,
        },
        // moderationEnabled: {
        //     type: Boolean,
        //     default: true,
        // },
        logsEnabled: {
            type: Boolean,
            default: true,
        }
    }
))