const chat = require('./Chat/chat')
const initialize = require('./initialize')
module.exports = (kibble) => {
    chat(kibble)
    initialize(kibble)
}