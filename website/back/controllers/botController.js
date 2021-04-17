import asyncHandler from 'express-async-handler';
import Bot from '../models/botModel.js';

//GET

const getBots = asyncHandler(async (req, res) => {
  const bots = await Bot.find({})
    .populate('user').sort({updatedAt: 'desc'}).lean();
  res.json(bots);
});

const getBotById = asyncHandler(async (req, res) => {
  const bot = await (await Bot.findById(req.params.id)).
    populated('user').lean();
  if (bot) {
    res.json(bot);
  } else {
    res.status(404);
    throw new Error('Bot not found');
  }
});

//POST
const updateBot = asyncHandler(async (req, res) => {

    const {
        githubId,
        displayName,
        image,
        email,
        token,
        refreshToken,
        createdBy
    } = req.body

    const bot = await Bot.findById(req.params.id).populated('user').lean()

    if(bot) {
        bot.githubIb = githubId,
        bot.displayName = displayName,
        bot.image = image,
        bot.email = email,
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

export { getBots, getBotById, updateBot };