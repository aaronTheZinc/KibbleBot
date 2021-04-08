const chat = require('./Chat/chat')
const initialie = require('./initialize')
module.exports = (kibble) => {
    chat(kibble)
    initialie(kibble)
}