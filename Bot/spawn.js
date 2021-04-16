const { spawnKibble } = require('./bot')
const start = async(room) => await spawnKibble(room)

exports.start = start
