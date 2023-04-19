const router = require("express").Router();
const userManager = require("../managers/userManager");
const { isAuth } = require("../middlewares/authentication");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "User route" });
});

router.post("/register", async (req, res) => {
  try {
    const token = await userManager.register(req.body);
    res.cookie("auth", token);
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userManager.login(email, password);
    res.cookie("auth", token);
    res.status(200).json(token);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

router.post("/logout", async (req, res) => {
  res.clearCookie("auth");
});

module.exports = router;
