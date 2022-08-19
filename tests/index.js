const { Client } = require("../dist/index");

let mc = new Client();

mc.serverInfo.getVersion("***REMOVED***").then((res) => console.log(res))