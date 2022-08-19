import { Platform, IPHostnameInterface } from "types/Server";
import axios from "axios";

export default class Servers {
  private JAVA_URL = "https://api.mcsrvstat.us/2";
  private BEDROCK_URL = "https://api.mcsrvstat.us/bedrock/2";
  private serverIp: string;

  constructor(serverIp: string) {
    this.serverIp = serverIp
  }

  /**
   * Fetch MCSrvStat.us API
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {object} Whole Server Object
   */
  async _get(ip: string = this.serverIp, platform: Platform = "Java") {
    if(platform != "Java" && platform != "Bedrock") throw new Error("Invalid Minecraft Platform have been provided.");
    if(!ip || ip == "") throw new Error("Invalid IP Address have been provided.");

    return axios.get(platform == "Java" ? this.JAVA_URL + ip : this.BEDROCK_URL + ip, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.data).catch((err) => {
      throw new Error("Invalid IP Address have been provided.");
    });
  }

  /**
   * Returns whole Server Object.
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {object} Whole Server Object
   */
  public getServer(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform);
  }

  /**
   * Returns Array of Server Plugins
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {Array} List of Server Plugins 
   */
  public getPluginList(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.plugins ? res.plugins.raw : []);
  }

  /**
   * Returns Name of Software Server's using
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {string} Name of Software
   */
  public getSoftware(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.software ? res.software : "N/A");
  }

  /**
   * Returns Version Server's using
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {string} Version of Server
   */
  public getVersion(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.version);
  }

  /**
   * Returns List of Online Player Names
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {Array} Name of Players Online
   */
  public getPlayerNames(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.players.list ? res.players.list : []);
  }

  /**
   * Returns Online Players Count
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {number} Count of Online Players
   */
  public getOnlineCount(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.players.online);
  }

  /**
   * Returns Whether Server is Offline (false) or Online (true)
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {boolean} Is Server Online
   */
  public isOnline(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res) => res.online);
  }

  /**
   * Returns Numerical IP, Port & Hostname
   * 
   * @param {string} ip - IP of the Server
   * @param {string} platform - Java or Bedrock Platform
   * @return {object} Numerical IP, Port & Hostname
   */
  public getIPHostname(ip: string = this.serverIp, platform: Platform = "Java") {
    return this._get(`/${ip}`, platform).then((res): IPHostnameInterface => {
      return {
        ip: res.ip,
        port: res.port,
        hostname: res.hostname
      }
    });
  }
}