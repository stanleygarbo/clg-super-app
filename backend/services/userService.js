const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");

/**
 * Registers a new user with the specified details.
 *
 * @param {Object} user - The user details.
 * @param {string} user.username - The username of the user.
 * @param {string} user.password - The password of the user.
 * @param {string} user.role - The role of the user.
 * @returns {void}
 */

const registerUser = async ({ username, password, roles }) => {
  const existing = await User.findOne({ username });
  if (existing) {
    throw new Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    password: hashedPassword,
    roles,
  });

  return await newUser.save();
};

/**
 *
 * @param {string} id
 */
const getUsers = async (id) => {
  if (!id) {
    const users = await User.find();
    return users;
  } else {
    const users = await User.findById(id);
    return users;
  }
};

module.exports = { registerUser, getUsers };
