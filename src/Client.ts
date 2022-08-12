import MinecraftData from "./structures/minecraft/MinecraftData";
import Player from "./structures/Player";
import Servers from "./structures/Servers";

export class Client {
  #options: object;
  private server: any
  private player: any
  private minecraft: any

  constructor(options: object = {}) {
    this.#options = options;
  }

  get serverInfo() {
    return this.server || (this.server = new Servers());
  }

  get playerInfo() {
    return this.player || (this.player = new Player());
  }

  get minecraftInfo() {
    return this.minecraft || (this.minecraft = new MinecraftData());
  }
}