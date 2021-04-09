const { serverSpecs, userTimeOut, isTimedOut } = require("./actions");
var nodemailer = require('nodemailer');
const Filter = require("../Chat/chatfilter");
require("dotenv").config();

const KibbleFilter = new Filter();
const checkForCommand = (str) => {
  const root = str.toString().trim().toLowerCase();
  if (root.includes("!kibble")) {
    console.log("Command Made!");
    return true;
  } else {
    return false;
  }
};


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});


const commandMap = {
  invite: (email) => {
    var mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: 'You have been invited to a DogeHouse Room!',
      text: 'https://next.dogehouse.tv/room/87d9cc48-370f-47e7-9d15-6449557cfcf2' // ill do this later lmao
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        return "Email sent - " + info.response;
      }
    })
    
  },
  specs: () => serverSpecs(),
  setroom: (type, messageEvent) => KibbleFilter.setFilter(type, messageEvent),
  timeout: (str) => userTimeOut(str).setUserTimeout(),
};







const cmds = Object.keys(commandMap);
const mapCommand = (command) => {
  if (cmds.includes(command[1])) {
    const action = commandMap[command[1]];
    return action(command[2]);
  } else {
    return false;
  }
};
const formatCmd = (command) => {
  //split into blocks
  const blx = command.split(" ");
  const commands = blx.map((str) => str.trim());
  return commands;
};

module.exports = (kibble) => {
  kibble.on("newChatMessage", async (message) => {
    
    const creator = kibble.rooms.current.creator;
    const _sender = message.author.username;
    console.log(_sender)
    KibbleFilter.filter(message);
    if(isTimedOut(_sender)) {
     await message.delete()
      message.reply('you are timed out!',{
        mentionUser: true,
        whispered: true,
      })
    }

    const isCommand = checkForCommand(message.content);
    if (isCommand) {
      const clientCommand = formatCmd(message.content);
      console.log("formatted", clientCommand[1]);
      const resultedCmd = mapCommand(clientCommand);
      if (!resultedCmd) {
        return;
      } else {
        const response = resultedCmd;
        message.reply(`${response}`, { mentionUser: true, whispered: true });
      }
    }
    // console.log(isCommand, message.content);
  });
};
