import express from 'express';
const botRouter = express.Router();
import {
  getBots,
  getBotById,
  updateBot,
  createBot
} from '../controllers/botController.js';

botRouter.get('/', getBots)
botRouter.get('/:id', getBotById)
botRouter.post('/', createBot)
botRouter.put('/id', updateBot)

export default botRouter;
