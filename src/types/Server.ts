export interface ServerOptions {
  port: number;
}

export interface IPHostnameInterface {
  ip: string,
  port: number,
  hostname: string
}

export type Platform = "Java" | "Bedrock"