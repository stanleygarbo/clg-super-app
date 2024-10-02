const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
 * Registers a new user with the specified details.
 *
 * @param {Object} userData - The user details.
 * @param {string} userData.username - The username of the user.
 * @param {string} userData.password - The password of the user.
 * @param {string} userData.role - The role of the user.
 * @returns {void}
 */
const loginUser = async (userData) => {
  const { username, password } = userData;

  // Check if the user exists
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error("Invalid credentials");
  }

  // Verify the password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  // Create JWT Payload
  const payload = { id: user._id, username: user.username, role: user.roles };

  // Sign the token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "8h", // Token expiration time
  });

  return { token: `Bearer ${token}`, username: user.username };
};

/**
 *
 * @param {string} id
 */
const getUser = async (id) => {
  if (!id) {
    const users = await User.find();
    return users;
  }

  return null;
};

module.exports = { loginUser, registerUser, getUser };
