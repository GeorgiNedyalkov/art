const router = require("express").Router();
const userManager = require("../managers/userManager");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "User route" });
});

router.post("/register", async (req, res) => {
  try {
    const newUser = await userManager.register(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ msg: error.message });
    console.log(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await userManager.login(email, password);
    console.log(token);
    res.status(200).json(token);
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: error.message });
  }
});

module.exports = router;
