const { Client } = require("dogehouse.js");
const kibble = new Client();
const addlisteners = require('./utils/bundler')
require("dotenv").config();

exports.spawnKibble = async (room) => {
  if (room) {
    kibble.connect(process.env.TOKEN, process.env.TOKEN_REFRESH).then((c) => {
      kibble.rooms.join(room);
      console.log("Connected to API");
      addlisteners(kibble)
    });
  } else {
    console.error("Please Provide A Valid Room Id");
  }
};

exports.kibble = kibble
