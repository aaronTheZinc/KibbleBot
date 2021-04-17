import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      user
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

//Get logged in user's sepcified bot
//api/users/profile/bots/:id
const getUsersOneBotById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)
  const bot = await Bot.findById(req.params.id)
  if (user) {
    const { hasBots } = user
    if(hasBots.length > 0) {
      const selectedBot = hasBots.filter(hasBot => 
          hasBot._id === bot.id)
      res.json(selectedBot)
    } else {
      res.status(404);
      throw new Error('User has no bots')
    }
  } else {
    res.status(404);
    throw new Error('User not found')
  }
})

//Get logged in user's bots
//api/users/profile/bots
const getUsersBotsById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)

  if (user) {
    const { hasBots } = user
    if(hasBots.length > 0) {
      res.json(hasBots)
    } else {
      res.status(404);
      throw new Error('User has no bots')
    }
  } else {
    res.status(404);
    throw new Error('User not found')
  }
})

// const updateUser = asyncHandler(async (req, res) => {
//     const user = await User.findById(req.user.id)
    
//     if(user) {
//         user.githubId = req.body.githubId || user.name
//     }
// }

export { getUsers, getUserById, getUserProfile, getUsersOneBotById, getUsersBotsById }
