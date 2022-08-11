const { Client } = require("../dist/index");

let mc = new Client();

mc.playerInfo.getPlayer("afaatatq351oin5asfna").then((res) => console.log(res.data.player.meta))