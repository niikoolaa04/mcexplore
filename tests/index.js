const { Client } = require("../dist/index");

let mc = new Client();

mc.minecraftInfo.getAllItems().then((res) => console.log(res))