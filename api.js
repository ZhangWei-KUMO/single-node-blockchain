const express = require("express");
const router = express.Router();

router.post("/buy", (req, res) => {
  console.log(req.body);
  res.json({ result: "success" })
});

module.exports = router;