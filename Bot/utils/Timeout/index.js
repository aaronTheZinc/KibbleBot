const ms = require('@naval-base/ms').default
class timeOut {
  constructor() {
    this.timedOutUsers = {
      users: [],
    };
  }
  timeOut = ({ username, time }) => {
    console.log("attatching timeout to -", username, time);

    //   const endTime =

    var now = new Date();
    now.setMinutes(Date.now() + ms(time.toString().trim()));
    console.log(ms(time.toString().trim())) // timestamp
    const endTime = new Date(now); // Date object

    this.timedOutUsers.users.push({ username: username, timeOutEnd: endTime });
    const penaltyInex = this.timedOutUsers.users.findIndex(
      (user) => user.username === username
    );
    this.timedOutUsers.users.splice(penaltyInex, penaltyInex);
  };
}
export default timeOut;