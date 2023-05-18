import { event } from "../../utils";
import { EmbedBuilder } from "discord.js";
import categories from '../../commands'

export default event(
    "interactionCreate",
    async ({ log, client }, interaction) => {
      if (!interaction.isStringSelectMenu()) return;
      if (!(interaction.customId === "help_select_menu")) return;
  
    const embed = new EmbedBuilder()
      .setColor("Navy")
      .setAuthor({ name: "Slimer.TS Help Menu", iconURL: interaction.client.user.displayAvatarURL() })
  
    categories.forEach((category) => {
      if (interaction.values[0] === `${category.name}_option`) {
        embed
          .setTitle(`${category.name} commands`)
        category.commands.forEach((cmd) => {
          embed
            .addFields(
              { name: `${cmd.meta.name}`, value: `${cmd.meta.description}` }
            )
        })
      }
    })
  
    await interaction.reply({ embeds: [embed], ephemeral: true })
})