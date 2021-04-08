const { prohibitedWords } = require("./wordDatabase");
class filter {
  constructor() {
    this.currentFiler = "DEFAULT";
    this.roomTypes = ["pg"];
  }
  pgFilter = (message, messageEvent) => {
    if (prohibitedWords.includes(message)) {
      console.log("includes prohibited words!");
    }
  };
  filter = ({ content }) => {
    const { currentFiler } = this;
    switch (currentFiler) {
      case "pg":
        console.log("PG is Set!");
    }
  };

  setFilter = (type, messageEvent) => {
    const { roomTypes } = this;
    console.log('attempting to set filter')
    if (roomTypes.includes(type.toString().trim())) {
        console.log('Does Include Filter')
      switch (this.currentFiler) {
        case "pg":
            console.log('new Filter Set!');
          return this.currentFiler = "pg"; 
      }
    } else if (type === "DEFAULT") {
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
