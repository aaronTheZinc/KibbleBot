const { reg } = require("./wordDatabase");
const expression = new RegExp(reg)
class filter {
  constructor() {
    this.currentFilter = "DEFAULT";
    this.roomTypes = ["pg", "disable"];
  }
  pgFilter = (message) => {
    if (expression.test(message.content)) {
      console.log("includes prohibited words!-->", message.content);
      message.delete();
    }
  };
  filter = (message) => {
    const { currentFilter } = this;
    switch (currentFilter) {
      case "pg":
        this.pgFilter(message);
        break;
      case "disable":
        break;

      default:
        this.pgFilter(message);
    }
  };

  setFilter = (type, messageEvent) => {
    const { roomTypes } = this;
    console.log("attempting to set filter");
    if (roomTypes.includes(type.toString().trim())) {
      console.log("Does Include Filter");
      this.currentFilter = type;
    } else if (type === "DEFAULT") {
      this.currentFilter;
      return;
    } else {
      return messageEvent.reply(`${type} is not command`, {
        mentionUser: true,
        whispered: true,
      });
    }
  };
}

module.exports = filter;
