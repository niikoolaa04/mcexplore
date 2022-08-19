const { Client } = require("../dist/index");

let mc = new Client();

mc.minecraftInfo.getAllBiomes().then((res) => console.log(res))