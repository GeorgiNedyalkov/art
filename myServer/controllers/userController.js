const router = require("express").Router();
const bcrypt = require("bcrypt");
const userManager = require("../managers/userManager");

router.get("/", (req, res) => {
  res.status(200).json({ msg: "User route" });
});

router.post("/register", async (req, res) => {
  const { name, username, email, password, repeatPassword } = req.body;

  if (password !== repeatPassword) {
    throw new Error(`Passwords do not match.`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userManager.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json(newUser);
});

module.exports = router;
