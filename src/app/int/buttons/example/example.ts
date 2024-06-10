import { ButtonData } from "../../../../config/types/types";

const exButton: ButtonData = {
  customId: "exButton",
  run: async (client, int) => {
    int.reply("Esto es un botón.");
  },
};
export default exButton;
