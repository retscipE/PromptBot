import { ActionRowBuilder, EmbedBuilder, SlashCommandBuilder, StringSelectMenuBuilder } from 'discord.js'
import { command, event } from '../../utils'

import categories from '../../commands'

const meta = new SlashCommandBuilder()
  .setName("help")
  .setDescription("Show all the commands within the bot");

const help = command(meta, ({ interaction }) => {
  const embed = new EmbedBuilder()
    .setColor("Navy")
    .setAuthor({
      name: "🇸🇪 Help Menu 🇸🇪",
      iconURL: interaction.client.user.displayAvatarURL(),
    });

  const menu = new StringSelectMenuBuilder()
    .setCustomId("help_select_menu")
    .setPlaceholder("No menu selected")
    .setMaxValues(1)
    .setMinValues(1);

  categories.forEach((category) => {
    menu.addOptions([
      {
        label: category.name,
        description: category.description ?? "No description provided",
        value: `${category.name}_option`
      }
    ])
    embed.addFields(
      { name: `${category.name}`, value: `${category.commands.length} cmds`, inline: true }
    )
  })
  
  const row = new ActionRowBuilder<StringSelectMenuBuilder>()
    .addComponents(
      menu
    )

  interaction.reply({ components: [row], embeds: [embed] })
})

export default help