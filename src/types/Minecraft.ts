export type MinecraftVersion = "1.7" 
  | "1.8" | "1.9" | "1.10" | "1.11" | "1.12" 
  | "1.13" | "1.14" | "1.15" | "1.16" | "1.17"
  | "1.18" | "1.19";

export interface MinecraftItems {
  id: number,
  displayName: string,
  name: string,
  stackSize: number
}

export interface MinecraftEntities {
  id: number,
  internalId: number,
  name: string,
  dispalyName: string,
  width: number,
  height: number,
  type: string,
  category: string
}

export interface MinecraftBlocks {
  id: number,
  displayName: string,
  name: string,
  hardness: number,
  resistance: number,
  minStateId: number,
  maxStateId: number,
  states: Array<any>,
  drops: Array<any>,
  diggable: boolean,
  transparent: boolean,
  filterLight: number,
  emitLight: number,
  boundingBox: string,
  stackSize: number,
  material: string,
  defaultState: number,
}

export interface MinecraftBiomes {
  id: number,
  name: string,
  category: string,
  temperature: number,
  precipitation: string,
  depth: number | string,
  dimension: string,
  displayName: string,
  color: number,
  rainfall: number
}