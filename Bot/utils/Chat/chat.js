const { serverSpecs, userTimeOut, isTimedOut } = require("./actions");
const Filter = require("../Chat/chatfilter");

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




const commandMap = {
  invite: (email) => {
    return "invites will be available very soon!";
  },
  specs: () => serverSpecs(),
  setroom: (type, messageEvent) => KibbleFilter.setFilter(type, messageEvent),
  timeout: (str, messageEvent) => userTimeOut(str, messageEvent).setUserTimeout(),
};







const cmds = Object.keys(commandMap);
const mapCommand = (command, messageEvent) => {
  if (cmds.includes(command[1])) {
    const action = commandMap[command[1]];
    return action(command[2], messageEvent)
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
      const resultedCmd = mapCommand(clientCommand, message);
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
