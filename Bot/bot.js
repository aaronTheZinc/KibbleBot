const Client = require('./Client')
const prompts = require('prompts');
const addlisteners = require('./utils/bundler').default
require("dotenv").config();

const prompt = async (questions) => await prompts(questions);

exports.spawnKibble = async (room) => {
    kibble.connect(process.env.TOKEN, process.env.TOKEN_REFRESH).then(async () => {
      let roomChoices = []
      let topRooms = (await kibble.rooms.top);
      
      /**
       * Defining your room options
       */
      topRooms.forEach(rm => roomChoices.push(rm.name));
      roomChoices.unshift('Custom room'); // Allows you to add a custom room.
      roomChoices.push('Cancel'); // Allows you to cancel selection.

      /**
       * Create your prompt object
       */
      promptObject = [
        { type: 'select', name: 'room', message: 'What room would you like to join?', choices: roomChoices },
        { type: (prev) => (prev === 0 ? 'text' : null), name: 'roomID', message: 'Please paste the roomID' }
      ];

      let res = await prompts(promptObject); // Define your prompt object

      /**
       * Defining your room choices
       */
      if (res.room === roomChoices.length - 1) process.exit();
      kibble.rooms.join(res.room === 0 ? res.roomID : topRooms[res.room - 1].id);
          console.log("Connected to API");
          addlisteners(kibble) // here
        });
};

// in terminal

exports.kibble = kibble
