const mongoose = require('mongoose')

const BotSchema = new mongoose.Schema({
  githubId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  token: {
      type: String
  },
  refreshToken: {
      type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Bot', BotSchema)