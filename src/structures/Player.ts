import axios from 'axios';

export default class Player {
  private BASE_URL = "https://playerdb.co/api/player/minecraft/";
  private MOJANG_URL = "https://api.mojang.com/";
  private OPTIFINE_URL = "http://s.optifine.net/capes/"

  /**
   * Fetch PlayerDB API
   * 
   * @param {string} username - Username or UUID of Player
   * @return {object} Player Object
   */
  async _get(username: string, url: string = this.BASE_URL) {
    if(!username || username == "") throw new Error("Invalid Player Username have been provided.");

    return axios.get(url == this.BASE_URL ? url + username : url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.data).catch((err) => {
      console.log(err)
      throw new Error("Invalid Player Username have been provided.");
    });
  }

  /**
   * Check whether an Minecraft Account exists
   * 
   * @param {string} username - Player's Username
   * @return {boolean} true if exists, otherwise false
   */
  public accountExist(username: string) {
    return this._get(username, this.MOJANG_URL + `users/profiles/minecraft/${username}`).then((res) => !!res.name);
  }

  /**
   * Returns whole Player Object.
   * 
   * @param {string} username - Player's Username
   * @return {object} Whole Player Object
   */
  public getPlayer(username: string) {
    return this._get(username);
  }
  
  /**
   * Returns whole Player Object.
   * 
   * @param {string} username - Player's Username
   * @return {string} Player's Avatar URL
   */
   public getAvatar(username: string) {
    return this._get(username).then((res) => res.data.player.avatar);
  }
  
  /**
   * Returns array of Player's Username History
   * 
   * @param {string} username - Player's Username
   * @return {Array} List of Player's Username History  
   */
   public getUsernameHistory(username: string) {
    return this._get(username).then((res) => res.data.player.meta.name_history || []);
  }
  
  /**
   * Returns Player's UUID
   * 
   * @param {string} username - Player's Username
   * @return {string} Player's UUID
   */
   public getUUID(username: string) {
    return this._get(username).then((res) => res.data.player.id);
  }

  /**
   * Returns Object with Player Skin(s)
   * 
   * @param {string} username - Player's Username
   * @return {object} Player's Skin
   */
  public getSkin(username: string) {
    return this._get(username, this.MOJANG_URL + `users/profiles/minecraft/${username}`).then((res) => {
      return {
        skin_body: `https://mc-heads.net/player/${username}`,
        skin_raw: `https://mc-heads.net/skin/${username}`,
        skin_download: `https://mc-heads.net/download/${username}`,
      }
    });
  }

  /**
   * Returns Player's Cape
   * 
   * @param {string} username - Player's Username
   * @return {string} Player's Cape
   */
  public getCape(username: string) {
    return this._get(username, this.MOJANG_URL + `users/profiles/minecraft/${username}`).then((res) => `${this.OPTIFINE_URL}${username}.png`);
  }
}