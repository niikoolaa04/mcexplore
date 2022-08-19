import { MinecraftVersion, MinecraftItems, MinecraftBlocks, MinecraftEntities, MinecraftBiomes } from "types/Minecraft";
import BaseMinecraft from "./BaseMinecraft";

export default class MinecraftData extends BaseMinecraft {
  /**
   * List of All valid Minecraft Versions
   */
  private validVersions: Array<MinecraftVersion> = ["1.7", "1.8", "1.9", "1.10", "1.11",
    "1.12", "1.13", "1.14", "1.15", "1.16", "1.17", "1.18", "1.19"];
  /**
   * If no 'version' parameter have been provided, use this (latest) version.
   */
  private defaultVersion: MinecraftVersion = this.validVersions[this.validVersions.length - 1];
  
  /**
   * Get all Minecraft Items from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftItems[]} List of Minecraft Items
   */
  public getAllItems(version: MinecraftVersion = this.defaultVersion) {
    if(!this.validVersions.includes(version)) throw new Error("Invalid Minecraft Version have been provided. It must be an first Version, ex. 1.8, 1.12, 1.17.");
    return this._get(`/${version}/items.json`).then((res): MinecraftItems[] => res);
  }

  /**
   * Get all Minecraft Entities from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftEntities[]} List of Minecraft Entities
   */
  public getAllEntities(version: MinecraftVersion = this.defaultVersion) {
    if(!this.validVersions.includes(version)) throw new Error("Invalid Minecraft Version have been provided. It must be an first Version, ex. 1.8, 1.12, 1.17.");
    return this._get(`/${version}/entities.json`).then((res): MinecraftEntities[] => res);
  }

  /**
   * Get all Minecraft Blocks from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftBlocks[]} List of Minecraft Blocks
   */
  public getAllBlocks(version: MinecraftVersion = this.defaultVersion) {
    if(!this.validVersions.includes(version)) throw new Error("Invalid Minecraft Version have been provided. It must be an first Version, ex. 1.8, 1.12, 1.17.");
    return this._get(`/${version}/blocks.json`).then((res): MinecraftBlocks[] => res);
  }

  /**
   * Get all Minecraft Biomes from specified Version
   * 
   * @param {MinecraftVersion} version - Version of Minecraft
   * @return {MinecraftBiomes[]} List of Minecraft Biomes
   */
  public getAllBiomes(version: MinecraftVersion = this.defaultVersion) {
    if(!this.validVersions.includes(version)) throw new Error("Invalid Minecraft Version have been provided. It must be an first Version, ex. 1.8, 1.12, 1.17.");
    return this._get(`/${version}/blocks.json`).then((res): MinecraftBiomes[] => res);
  }

  /**
   * Get list of Minecraft Versions (& snapshots)
   * 
   * @return {Array<string>} List of Minecraft Versions (& snapshots)
   */
  public listOfVersions() {
    return this._get(`/common/versions.json`).then((res): Array<string> => res);
  }
}