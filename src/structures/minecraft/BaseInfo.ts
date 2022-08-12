import { MinecraftVersion, MinecraftItems, MinecraftBlocks, MinecraftEntities, MinecraftBiomes } from "types/Minecraft";
import MinecraftData from "./MinecraftData";

export default class BaseInfo extends MinecraftData {
  /**
   * Get all Minecraft Items from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftItems[]} List of Minecraft Items
   */
  public getAllItems(version: MinecraftVersion = "1.18") {
    return this._get(`/${version}/items.json`).then((res): MinecraftItems[] => res.data);
  }

  /**
   * Get all Minecraft Entities from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftEntities[]} List of Minecraft Entities
   */
  public getAllEntities(version: MinecraftVersion = "1.18") {
    return this._get(`/${version}/entities.json`).then((res): MinecraftEntities[] => res.data);
  }

  /**
   * Get all Minecraft Blocks from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftBlocks[]} List of Minecraft Blocks
   */
  public getAllBlocks(version: MinecraftVersion = "1.18") {
    return this._get(`/${version}/blocks.json`).then((res): MinecraftBlocks[] => res.data);
  }

  /**
   * Get all Minecraft Biomes from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftBiomes[]} List of Minecraft Biomes
   */
  public getAllBiomes(version: MinecraftVersion = "1.18") {
    return this._get(`/${version}/blocks.json`).then((res): MinecraftBiomes[] => res.data);
  }
}