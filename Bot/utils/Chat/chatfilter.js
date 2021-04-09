const { regex } = require("./wordDatabase");
const reg = new RegExp(regex());

class filter {
  constructor() {
    this.currentFitler = "DEFAULT";
    this.roomTypes = ["pg"];
  }
  pgFilter = (message, msgDelete) => {
    
    if (reg.test(message)) {
      console.log("includes prohibited words!");
      msgDelete.delete()
      
    }
  };
  filter = (message) => {
    const{ content } = message
    const { currentFilter } = this;
    switch (currentFilter) {
      case "pg":
        this.pgFilter(content, message)

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
