const { Client } = require("../dist/index");

let mc = new Client();

mc.playerInfo.accountExist("aaaa").then((res) => console.log(res))