const rateLimit = require('express-rate-limit');
const Url = require('../models/Url');

const shortenLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: async (req) => {
    const userIP = req.ip;
    const hourAgo = new Date(Date.now() - 60 * 60 * 1000);
    
    const urlCount = await Url.countDocuments({
      createdBy: userIP,
      createdAt: { $gte: hourAgo }
    });
    
    return urlCount >= 5 ? 0 : 5 - urlCount;
  },
  message: 'You have exceeded the 5 URL shortens per hour limit'
});

module.exports = { shortenLimiter }; 