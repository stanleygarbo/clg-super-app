const { User } = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const loginUser = async (userData) => {
  const { username, password } = userData;

  // Check if the user exists
  const user = await User.findOne({ username }).select("+password");
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

const authService = { loginUser };

module.exports = authService;
