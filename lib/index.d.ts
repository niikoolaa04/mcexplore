/**
 * Get Server's IP Address if domain is provided
 *
 * @param ip IP Addresss of Server
 */
export declare const isOnline: (ip: String) => Promise<any>;
/**
 * Get Server's port
 *
 * @param ip IP Address of Server
 */
export declare const getPort: (ip: String) => Promise<any>;
/**
 * Get Software Server's using
 *
 * @param ip IP Address of Server
 */
export declare const getSoftware: (ip: String) => Promise<any>;
/**
 * Get Server's version
 *
 * @param ip IP Address of Server
 */
export declare const getVersion: (ip: String) => Promise<any>;
/**
 * Get Number of Online Players on Server
 *
 * @param ip IP Address of Server
 */
export declare const getPlayerCount: (ip: String) => Promise<any>;
/**
 * Get list of Server's Plugins
 *
 * @param ip IP Address of Server
 */
export declare const getPluginList: (ip: String) => Promise<any>;
/**
 * Check whether Server has a specific Plugin
 *
 * @param ip IP Address of Server
 * @param plugin Name of Plugin to check
 */
export declare const hasPlugin: (ip: String, plugin: String) => Promise<any>;
