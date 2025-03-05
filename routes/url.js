const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Url = require("../models/Url");
const { shortenLimiter } = require("../middleware/rateLimiter");
const auth = require("../middleware/auth");

 
router.post("/shorten", auth, shortenLimiter, async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      return res.status(400).json({ error: "Please provide a URL" });
    }

    
    const shortCode = shortid.generate();
    const url = new Url({
      originalUrl: longUrl,
      shortCode,
      createdBy: req.user.userId,
      // 7-day expiry is handled by MongoDB TTL index
    });

    await url.save();
    res.json({
      shortUrl: `${req.protocol}://${req.get("host")}/${shortCode}`,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


router.get("/:shortCode", async (req, res) => {
  try {
    const { shortCode } = req.params;

    
    const url = await Url.findOne({ shortCode });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

  
    url.clicks += 1;
    await url.save();

    
    res.redirect(url.originalUrl);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// 3. GET /stats/:shortCode - Get URL statistics
router.get("/stats/:shortCode", async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (!url) {
      return res.status(404).json({ error: "URL not found" });
    }

    res.json({
      originalUrl: url.originalUrl,
      shortCode: url.shortCode,
      clicks: url.clicks,
      createdAt: url.createdAt,
      expiresAt: new Date(url.createdAt.getTime() + 7 * 24 * 60 * 60 * 1000),
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
