import fetch from "node-fetch";

const URL_FETCH = `https://api.mcsrvstat.us/2/`;

/**
 * @param ip IP Addresss of Server
 */
export const isOnline = async(ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    
    return apiResponse.online;
  });
}

/**
 * @param ip IP Address of Server
 */
export const getPort = async(ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.port;
  });
}

/**
 * @param ip IP Address of Server
 */
export const getSoftware = async(ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.software ? apiResponse.software : "Unknown Software";
  });
}

/**
 * @param ip IP Address of Server
 */
export const getVersion = async(ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.version ? apiResponse.version : "Unknown Version";
  });
}

/**
 * @param ip IP Address of Server
 */
export const getPlayerCount = async (ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.players.online || 0;
  });
}

/**
 * @param ip IP Address of Server
 */
export const getPluginList = async(ip: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.plugins ? apiResponse.plugins : "No Plugins";
  });
}

/**
 * @param ip IP Address of Server
 * @param plugin Name of Plugin to check
 */
export const hasPlugin = async(ip: String, plugin: String) => {
  await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");
    if(!apiResponse.plugins) throw new Error("Server provided don't have public plugin list");
    if(!plugin) throw new Error("No Plugin name was provided");

    return apiResponse.plugins.names.some((pl: any) => pl.toLowerCase() == plugin.toLowerCase());
  });
}