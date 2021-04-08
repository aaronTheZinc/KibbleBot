const chat = require('./chat')
const initialie = require('./initialize')
module.exports = (kibble) => {
    chat(kibble)
    initialie(kibble)
}