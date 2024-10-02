const roleMiddleware = (roles) => {
  return (req, res, next) => {
    let isValid = false;
    roles.map((i) => {
      req.user.roles.map((j) => {
        if (i === j) {
          isValid = true;
        }
      });
    });
    if (!isValid) {
      return res
        .status(403)
        .json({ message: "Access forbidden: Insufficient permissions" });
    }
    next();
  };
};

module.exports = roleMiddleware;
