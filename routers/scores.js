const { Router } = require("express");
const User = require("../models/").user;
const Score = require("../models/").score;

const router = new Router();

//http://localhost:4000/scores

router.get("/", async (req, res, next) => {
  try {
    const scores = await Score.findAll({ include: User });
    console.log("score Response", scores);
    res.send(scores);
  } catch (e) {
    console.log("Score Router", e.message);
    next(e);
  }
});

module.exports = router;
