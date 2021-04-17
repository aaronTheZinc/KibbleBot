import express from 'express';
const userRouter = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
  getUsersOneBotById,
  getUsersBotsById
} from '../controllers/userController.js';
userRouter.use('/', getUsers);
userRouter.use('/:id', getUserById)
userRouter.use('/profile', getUserProfile)
userRouter.use('/profile/bots', getUsersBotsById)
userRouter.use('/profile/bots:id', getUsersOneBotById)

export default userRouter;
