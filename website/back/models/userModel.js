import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  githubId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  hasBots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bot'
  }],
},
    {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)

export default User