import mongoose from 'mongoose'

const BotSchema = mongoose.Schema({
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
  createdBy: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'User'
  },
}, {
      timestamps: true
})

const Bot = mongoose.model('Bot', BotSchema)

export default Bot