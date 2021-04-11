import asyncHandler from 'express-async-handler';
import User from '../models/user.model.js';

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

export { getUsers, getUserById, getUserProfile };
