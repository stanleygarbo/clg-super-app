const authService = require("../services/authService");

const login = async (req, res) => {
  try {
    const user = await authService.loginUser(req.body);
    res.status(200).json({
      message: "Login successful",
      token: user.token, // Return the JWT token here
      username: user.username,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const authController = { login };

module.exports = authController;
