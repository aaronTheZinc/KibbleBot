import express from 'express';
const userRouter = express.Router();
import {
  getUsers,
  getUserById,
  getUserProfile,
} from '../controllers/userController.js';
import { ensureAuth }

export default userRouter;
