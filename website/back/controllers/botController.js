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

    const {
        githubId,
        displayName,
        username,
        image,
        token,
        refreshToken,
        createdBy
    } = req.body

    const bot = new Bot({
        githubId: githubId,
        displayName: displayName,
        username: username,
        image: image,
        token: token,
        refreshToken: refreshToken,
        createdBy: createdBy
    })

    const createdBot = await bot.save()
    res.status(201).json(createdBot)
})

const updateBot = asyncHandler(async (req, res) => {

    const {
        githubId,
        displayName,
        image,
        token,
        refreshToken,
        createdBy
    } = req.body

    const bot = await Bot.findById(req.params.id)

    if(bot) {
        bot.githubIb = githubId,
        bot.displayName = displayName,
        bot.image = image,
        bot.token = token,
        bot.refreshToken = refreshToken,
        bot.createdBy = createdBy

        const updatedBot = await bot.save()
        res.json(updatedBot)
    } else {
        res.status(404)
        throw new Error('Bot not found')
    }

})

export { getBots, getBotById, createBot, updateBot };