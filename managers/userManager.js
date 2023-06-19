const User = require("../models/User");
const jwt = require("../lib/jsonwebtoken");
const bcrypt = require("bcrypt");

exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (userData) => {
  const { username, email, password, repeatPassword } = userData;

  if (password !== repeatPassword) {
    throw new Error(`Passwords do not match.`);
  }

  const existingUser = await User.findOne({
    $or: [{ username }, { email }],
  });

  if (existingUser) {
    throw new Error(`User with such credentials already exists`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ ...userData, password: hashedPassword });

  return this.login(email, password);
};

exports.login = async (email, password) => {
  const existingUser = await this.findByEmail(email);
  if (!existingUser) {
    throw new Error("There is no user with this email");
  }

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);

  if (!isPasswordValid) {
    throw new Error("Invalid password");
  }

  const payload = {
    id: existingUser._id,
    email,
    username: existingUser.username,
  };

  const token = await jwt.sign(payload, process.env.SECRET);

  return {
    token,
    email,
    userId: existingUser._id,
  };
};
