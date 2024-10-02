const { validationResult } = require("express-validator");
const userService = require("../services/userService");

const register = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const user = await userService.registerUser(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user: { username: user.username },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const user = await userService.loginUser(req.body);
    res.status(200).json({
      message: "Login successful",
      token: user.token, // Return the JWT token here
      username: user.username,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { register, login };
