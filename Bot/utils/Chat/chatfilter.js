const { prohibitedWords } = require("./wordDatabase");
class filter {
  constructor() {
    this.currentFitler = "DEFAULT";
    this.roomTypes = ["pg"];
  }
  pgFilter = (message, msgDelete) => {
    if (prohibitedWords.includes(message)) {
      console.log("includes prohibited words!");
      msgDelete.delete()
      
    }
  };
  filter = (message) => {
    const{ content } = message
    const { currentFilter } = this;
    switch (currentFilter) {
      case "pg":
        messageEvent.reply("Setting room filter to PG (Parental Guidence)");
        this.pgFilter(content, message)
      case "disable":
        messageEvent.reply("Disabling chat filter for this room");
        break;

      default: 
      this.pgFilter(content, message)  
    }
  };

  setFilter = (type, messageEvent) => {
    const { roomTypes } = this;
    console.log('attempting to set filter')
    if (roomTypes.includes(type.toString().trim())) {
        console.log('Does Include Filter')
        this.currentFilter = type
    } else if (type === "DEFAULT") {
      this.currentFilter
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
