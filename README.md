# MCExplore
[![npm package](https://nodei.co/npm/js.poke.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/js.poke/)

MCExplore is NPM Package which allows you to get various data about Minecraft Server, Minecraft Player & Minecraft Game itself.
## Features
### Player
* Get Avatar
* Get Skin (Download & View Links)
* Get Username History
* Get UUID
* Get Cape
### Server
* Get List of Plugins
* Get Software
* Get Version
* Get List of Players
* Get Number of Players
* Whether Server is Online
* Get Hostname/IP from IP/Hostname
### Minecraft
* Get all Minecraft Items
* Get all Minecraft Entities
* Get all Minecraft Blocks
* Get all Minecraft Biomes
* Get list of Minecraft Versions

## Installation
```
npm install mcexplore
```

## Easy Usage
```
// Importing 'Client' as 'MCExplore' for better readability
const { Client: MCExplore } = require("mcexplore");

const mcExplorer = new MCExplore();

// Get all Server Information at once
mcExplorer.serverInfo.getServer("examplemc.com").then((result) => {
    console.log(result);
});

// Get all Player Information at once
mcExplorer.playerInfo.getPlayer("Notch").then((result) => {
    console.log(result);
});
```

## Usage
For beginning, you need to initialize MCExplore Client as so:
```
// Importing 'Client' as 'MCExplore' for better readability
const { Client: MCExplore } = require("mcexplore");

// Specifying Server IP manually
const mcExplorer = new MCExplore();

// Specifying Server IP once
// const mcExplorer = new MCExplore({ ip: "example.com" });
```
and after that you can use functions on `mcExplorer`.
### **Server**
Server functions accepts `ip` and (optional) `platform` parameters, where `platform` isn't required but can be `Java` or `Bedrock`.
___
Get all Server Information at once
```
mcExplorer.serverInfo.getServer(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Get List of Plugins
```
mcExplorer.serverInfo.getPluginList(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Get which Software Server's Using
```
mcExplorer.serverInfo.getSoftware(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Get Server's Version(s)
```
mcExplorer.serverInfo.getVersion(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Get list of Player's Playing on Server
```
mcExplorer.serverInfo.getPlayerNames(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Get Number of Players online
```
mcExplorer.serverInfo.getOnlineCount(serverIp, platform?).then((result) => {
    console.log(result);
});
```
Check whether Server is online or offline
```
mcExplorer.serverInfo.isOnline(serverIp, platform?).then((result) => {
    console.log(result);
});
```
If IP is provided, `Hostname, IP & Port` will be returned.
If Hostname is provided `Hostname, IP & Port` will be returned
```
mcExplorer.serverInfo.getIPHostname(serverIp, platform?).then((result) => {
    console.log(result);
});
```
### **Player**
These functions accepts `username` parameter which is required.
___
Check whether Account exist
```
mcExplorer.playerInfo.accountExist(username).then((result) => {
    console.log(result);
});
```
Get all Player Information at once
```
mcExplorer.playerInfo.getPlayer(username).then((result) => {
    console.log(result);
});
```
Get Player's Avatar
```
mcExplorer.playerInfo.getAvatar(username).then((result) => {
    console.log(result);
});
```
Get Player's Username History
```
mcExplorer.playerInfo.getUsernameHistory(username).then((result) => {
    console.log(result);
});
```
Get Player's UUID
```
mcExplorer.playerInfo.getUUID(username).then((result) => {
    console.log(result);
});
```
Get Player's Skin (View & Download Links)
```
mcExplorer.playerInfo.getSkin(username).then((result) => {
    console.log(result);
});
```
Get Player's Cape
```
mcExplorer.playerInfo.getCape(username).then((result) => {
    console.log(result);
});
```
### **Minecraft**
These functions accepts (optional) `version` parameter, defaults to latest Minecraft Version.
___
Get list of Minecraft Items
```
mcExplorer.minecraftInfo.getAllItems(version?).then((result) => {
    console.log(result);
});
```
Get list of Minecraft Entities
```
mcExplorer.minecraftInfo.getAllEntities(version?).then((result) => {
    console.log(result);
});
```
Get list of Minecraft Blocks
```
mcExplorer.minecraftInfo.getAllBlocks(version?).then((result) => {
    console.log(result);
});
```
Get list of Minecraft Biomes
```
mcExplorer.minecraftInfo.getAllBiomes(version?).then((result) => {
    console.log(result);
});
```
Get list of Minecraft Versions
```
mcExplorer.minecraftInfo.listOfVersions().then((result) => {
    console.log(result);
});
```

## Upcoming
* Get Information about Specific Biomes
* Get Information about Specific Entity