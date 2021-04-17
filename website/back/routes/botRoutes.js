import express from 'express';
const botRouter = express.Router();
import {
  getBots,
  getBotById,
  updateBot
} from '../controllers/botController.js';

botRouter.get('/', getBots)
botRouter.get('/:id', getBotById)
botRouter.put('/:id', updateBot)

export default botRouter;
