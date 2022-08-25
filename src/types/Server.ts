export interface BaseServer {
  online: boolean,
  ip: string,
  port: number,
  motd: MOTD,
  players: PlayersList,
  version: string,
  protocol: number,
  hostname: string,
  icon: string,
  software:  string,
  map: string,
  gamemode: string,
  serverid: string,
  plugins: Plugins,
  mods: Mods
}

interface PlayersList {
  online: number,
  max: number,
  list: string[],
  uuid?: any,
}

interface Plugins {
  names: string[],
  raw: string[]
}

interface Mods {
  names: string[],
  raw: string[]
}

interface MOTD {
  raw: string[],
  clean: string[],
  html: string[]
}

export interface ServerOptions {
  port: number;
}

export interface IPHostnameInterface {
  ip: string,
  port: number,
  hostname: string
}

export type Platform = "Java" | "Bedrock"