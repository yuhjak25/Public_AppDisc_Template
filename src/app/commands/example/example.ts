import {
  ActionRowBuilder,
  ApplicationCommandOptionType,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} from "discord.js";
import Category from "../../../config/intefaces/Category";
import { SlashCommandData } from "../../../config/types/types";

const example: SlashCommandData = {
  name: "example",
  description: "Ejemplo",
  category: Category.ex,
  options: [
    {
      name: "message",
      description: "Mensaje de ejemplo",
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (client, int, args) => {
    //@ts-ignore
    const message = int.options.getString("message");
    const exEmbed = new EmbedBuilder()
      .setTitle("Esto es un ejemplo.")
      .setDescription(message);
    const exButton = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId("exButton")
        .setLabel("Pulsame!")
        .setStyle(ButtonStyle.Danger)
    );
    int.reply({
      embeds: [exEmbed],
      components: [exButton],
    });
  },
};
export default example;
