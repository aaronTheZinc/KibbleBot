const { serverSpecs, userTimeOut, isTimedOut } = require("./actions");
const Filter = require("./chatfilter");
const nodemailer = require('nodemailer'); // do (npm install nodemailer)
// const { createEmail } = require('./email')
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


let mailTransporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
  
});


const commandMap = {
  invite: (msg) => {

    const emailRegex = '^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$';
    // Mail Details

    let mailDetails = {
      from: 'KibbleBot1337@gmail.com',
      to: emailRegex.exec(msg), //regex
      subject: 'You have been invited to a DogeHouse Room!',
      text: window.location.href // grabs current URL
    }

    // Mail Sender

    mailTransporter.sendMail(mailDetails, function(err, data) {
      if (err) {
        console.log('An unrecoverable error has occured'); // lmao
      } else {
        return 'Email sent successfully!';
      }
    })

  },
  specs: () => serverSpecs(),
  setroom: (type, messageEvent) => KibbleFilter.setFilter(type, messageEvent),
  timeout: (str, messageEvent) => userTimeOut(str, messageEvent).setUserTimeout(),
  //help: (str, messageEvent), //doesnt work
  // try 
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

module.expor = (kibble) => {
  kibble.on("newChatMessage", async (message) => {
    
    const _sender = message.author.username;
    console.log(_sender)
    KibbleFilter.filter(message);
    const isCommand = checkForCommand(message.content);
    if(isTimedOut(_sender)) {
      console.log(message.author.username, 'msg =<', message.content,'---is timed out', true, ' is Command:', isCommand )
     await message.delete()
      message.reply('you are timed out!',{
        mentionUser: true,
        whispered: true,
      })
    } else {
      console.log(message.author.username,'msg =<', message.content, '---is timed out', false, ' is Command:', isCommand )
    }

    if (isCommand) {
      const clientCommand = formatCmd(message.content);
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