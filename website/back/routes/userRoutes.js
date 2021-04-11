import express from 'express';
const userRouter = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
} from '../controllers/userController.js';
userRouter.use('/', getUsers);
userRouter.use('/:id', getUserById)
userRouter.use('/profile', getUserProfile)

export default userRouter;
