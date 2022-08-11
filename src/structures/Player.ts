import axios from 'axios';

export default class Player {
  private BASE_URL = "https://playerdb.co/api/player/minecraft/";

  /**
   * Fetch PlayerDB API
   * 
   * @param {string} username - Username or UUID of Player
   * @return {object} Player Object
   */
  async _get(username: string) {
    if(!username || username == "") throw new Error("Invalid Player Username have been provided.");

    return axios.get(this.BASE_URL + username, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.data).catch((err) => {
      throw new Error("Invalid Player Username have been provided.");
    });
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
}