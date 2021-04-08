const {serverSpecs, setroom, roomFilter} = require('./actions')
const Filter = require('./chatfilter')

const KibbleFilter = new Filter()

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
  invite: (email) => {return 'invites will be available very soon!'},
  specs: () => serverSpecs(),
  setroom: (type, messageEvent) => KibbleFilter.setFilter(type, messageEvent)
  

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
  const blx = command.split(" ");
  const commands = blx.map((str) => str.trim());
  return commands
};

module.exports = (kibble) => {
  kibble.on("newChatMessage", async (message) => {
      KibbleFilter.filter(message)
    const isCommand = checkForCommand(message.content);
    if (isCommand) {
      const clientCommand = formatCmd(message.content);
      console.log("formatted", clientCommand[1]);
      const resultedCmd = mapCommand(clientCommand);
      if (!resultedCmd) {
        return;
      } else {
        const response = resultedCmd
        message.reply(`${response}`, { mentionUser: true, whispered: true });
      }
    }
    // console.log(isCommand, message.content);
  });
};


