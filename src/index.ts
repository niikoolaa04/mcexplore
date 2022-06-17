import fetch from "node-fetch";

const URL_FETCH = `https://api.mcsrvstat.us/2/`;

/**
 * Get Server's IP Address if domain is provided
 * 
 * @param ip IP Addresss of Server
 */
export const isOnline = async(ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    
    return apiResponse.online;
  });
}

/**
 * Get Server's port
 * 
 * @param ip IP Address of Server
 */
export const getPort = async(ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.port;
  });
}

/**
 * Get Software Server's using
 * 
 * @param ip IP Address of Server
 */
export const getSoftware = async(ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.software ? apiResponse.software : "Unknown Software";
  });
}

/**
 * Get Server's version
 * 
 * @param ip IP Address of Server
 */
export const getVersion = async(ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.version ? apiResponse.version : "Unknown Version";
  });
}

/**
 * Get Number of Online Players on Server
 * 
 * @param ip IP Address of Server
 */
export const getPlayerCount = async (ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.players.online || 0;
  });
}

/**
 * Get list of Server's Plugins
 * 
 * @param ip IP Address of Server
 */
export const getPluginList = async(ip: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");

    return apiResponse.plugins ? apiResponse.plugins : "No Plugins";
  });
}

/**
 * Check whether Server has a specific Plugin
 * 
 * @param ip IP Address of Server
 * @param plugin Name of Plugin to check
 */
export const hasPlugin = async(ip: String, plugin: String) => {
  if(!ip || typeof ip != "string") throw new Error("Valid IP must be provided");

  return await fetch(`${URL_FETCH}${ip}`).then(async(res: any) => {
    let apiResponse: any = await res.json();
    if(apiResponse.online == false) throw new Error("Server provided is offline or doesn't exist");
    if(!apiResponse.plugins) throw new Error("Server provided don't have public plugin list");
    if(!plugin) throw new Error("No Plugin name was provided");

    return apiResponse.plugins.names.some((pl: any) => pl.toLowerCase() == plugin.toLowerCase());
  });
}