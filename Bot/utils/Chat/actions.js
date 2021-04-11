const os = require("os");
const { prohibitedWords } = require("./wordDatabase");
const TimeOut = require("../Timeout/index");

/// !List Server Specs
exports.serverSpecs = () => {
  let hostinfo = `OS: ${os.type()} ${os.release()} ${os.arch()} | CPU: (${
    os.cpus().length
  } Cores) ${os.cpus(0)[0].model} |GPU: (1660 super OC)| Memory: ${
    Math.round((os.freemem() / 1024 / 1024 / 1024) * 10) / 10
  }GB free of ${Math.round((os.totalmem() / 1024 / 1024 / 1024) * 10) / 10}GB`;
  return hostinfo;
};

//Kibble Timeout
const KBT = new TimeOut();
exports.userTimeOut = (client) => {
  console.log('TIMEOUT CLIENT -->', client)
  const root = client.split("/");
  const username = root[0];
  const time = root[1];

  return {
    currentTimeOut: !KBT.timedOutUsers.users
      ? "No Users"
      : KBT.timedOutUsers.users.map((user) => user.username),
    setUserTimeout: () => KBT.timeOut({username, time}),
  };
};

var dateInPast = function (firstDate, secondDate) {
  return !(firstDate <= secondDate)
};

exports.isTimedOut = (username) => {
  const user = KBT.timedOutUsers.users.find(
    (user) => user.username === username
  );
  if (user) {
    // KBT.timedOutUsers.users.find( (user) => user.username === username ).timeOutEnd = "new time"
    var past = user.timeOutEnd
    var today = Date.now();
    console.log(past, today)
    const isInTimeOut = dateInPast(past, today);
    console.log("is times out", isInTimeOut);
    return isInTimeOut;
  }
};

