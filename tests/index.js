const { Client } = require("../dist/index");

let mc = new Client();

mc.playerInfo.getSkin("***REMOVED***").then(console.log)