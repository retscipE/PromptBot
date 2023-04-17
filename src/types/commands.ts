import {
    Awaitable,
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandsOnlyBuilder,
  } from 'discord.js'
  import SwedenClient from '../client/SwedenClient'
  
  // Logger function again...
  type LoggerFunction = (...args: unknown[]) => void
  
  // Export types to build commands
  export interface CommandProps {
    interaction: ChatInputCommandInteraction
    client: SwedenClient
    log: LoggerFunction
  }
  
  export type CommandExec =
    (props: CommandProps) => Awaitable<unknown>
  export type CommandMeta =
    | SlashCommandBuilder
    | Omit<SlashCommandBuilder, "addSubcommand" | "addSubcommandGroup">
    | SlashCommandSubcommandsOnlyBuilder
  export interface Command {
    meta: CommandMeta
    exec: CommandExec
    cooldown?: number
  }
  
  export interface CommandCategoryExtra {
    description?: string
  }
  
  export interface CommandCategory extends CommandCategoryExtra {
    name: string
    commands: Command[]
  }