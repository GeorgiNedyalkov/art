const User = require("../models/User");
const bcrypt = require("bcrypt");

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

  const newUser = await User.create({ ...userData, password: hashedPassword });

  return newUser;
};
