import axios from 'axios';

export default class BaseMinecraft {
  /**
   * Base URL for Fetching Minecraft Data
   * URL Structure: /pc/<version>/<type - items, entities..>.json
   */
   private BASE_URL = "https://raw.githubusercontent.com/PrismarineJS/minecraft-data/master/data/pc"

  /**
   * Fetch Minecraft Data
   * 
   * @param {string} endpoint - Endpoint
   * @return {any} Minecraft Data
   */
  async _get(endpoint: string, url: string = this.BASE_URL) {
    if(!endpoint || endpoint == "") throw new Error("Invalid Endpoint/Search Query have been provided.");

    return axios.get(url == this.BASE_URL ? url + endpoint : url, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.data).catch((err) => {
      throw new Error("Invalid Endpoint/Search Query have been provided.");
    });
  }
}