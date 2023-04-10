const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: "User route" });
});

module.exports = router;
