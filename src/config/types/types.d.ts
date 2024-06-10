import {
  ApplicationCommandOptionType,
  ButtonInteraction,
  CommandInteraction,
  ModalSubmitInteraction,
  PermissionResolvable,
  StringSelectMenuInteraction,
} from "discord.js";
import Category from "../intefaces/Category";
import YourClient from "../..";

export type SlashCommandData = {
  name: string;
  description: string;
  category: Category;
  dev?: boolean;
  dm?: boolean;
  memberPermissions?: PermissionResolvable[];
  options?: SlashCommandOption[];
  run: (
    client: YourClient,
    int: CommandInteraction,
    args: string[]
  ) => Promise<void>;
};

export interface SlashCommandOption {
  name: string;
  description: string;
  type: ApplicationCommandOptionType;
  required?: boolean;
  choices?: SlashCommandOptionChoice[];
}

export interface SlashCommandOptionChoice {
  name: string;
  value: string | number | boolean;
}

export interface EventData {
  name: string;
  run: (client: YourClient, ...args: any[]) => Promise<void>;
}

export type ButtonData = {
  customId: string;
  memberPermissions?: PermissionResolvable[];
  run: (client: YourClient, int: ButtonInteraction) => Promise<void>;
};

export type ModalData = {
  customId: string;
  run: (client: YourClient, int: ModalSubmitInteraction) => Promise<void>;
};

export type SelectMenuData = {
  customId: string;
  memberPermissions?: PermissionResolvable[];
  run: (client: YourClient, int: StringSelectMenuInteraction) => Promise<void>;
};
