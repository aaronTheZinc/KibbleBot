import express from 'express';
const userRouter = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
userRouter.route('/').get(protect, getUsers);
userRouter.route('/id/:id').get(protect, getUserById);
userRouter.route('/profile').get(protect, getUserProfile);
export default userRouter;
