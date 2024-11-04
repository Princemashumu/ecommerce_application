// middleware/roleMiddleware.js
const authorizeRole = (...allowedRoles) => {
    return (req, res, next) => {
      const { role } = req.user; // Ensure req.user is populated from the authenticateToken middleware
      if (!allowedRoles.includes(role)) {
        return res.status(403).json({ message: 'Access denied' });
      }
      next();
    };
  };
  
  module.exports = authorizeRole;
  