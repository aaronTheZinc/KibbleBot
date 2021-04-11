import asyncHandler from 'express-async-handler';
import Bot from '../models/botModel.js';

//GET

const getBots = asyncHandler(async (req, res) => {
  const bots = await Bot.find({});
  res.json(bots);
});

const getBotById = asyncHandler(async (req, res) => {
  const bot = await Bot.findById(req.params.id);
  if (bot) {
    res.json(bot);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

//POST

const createBot = asyncHandler(async (req, res) => {
    const bot = new Bot({
        githubId: req.body.githubId,
        displayName: req.body.displayName,
        image: req.body.image,
        token: req.body.token,
        refreshToken: req.body.refreshToken
    })
}



export { getProducts, getProductById };