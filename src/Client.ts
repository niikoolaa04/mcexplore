import { Options } from "./types/Base";
import MinecraftData from "./structures/minecraft/MinecraftData";
import Player from "./structures/Player";
import Servers from "./structures/Servers";

export class Client {
  #options: any;

  constructor(options: Options = { ip: "" }) {
    this.#options = options;
  }

  get serverInfo() {
    return new Servers(this.#options.ip);
  }

  get playerInfo() {
    return new Player();
  }

  get minecraftInfo() {
    return new MinecraftData();
  }
}