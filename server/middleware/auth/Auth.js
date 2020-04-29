const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

class Auth {
  constructor() {
    this.checkAuth = (req, res, next) => {
      try {
        const header = req.header('Authorization');
        if (!header || header === '') {
          return res.status(401).json({
            status: 401,
            error: 'Unauthorized',
          });
        }
        const token = jwt.verify(header, process.env.SECRETE_KEY);
        req.user = token;
        next();
      } catch (error) { res.status(401).json({ status: 401, error: 'Invalid token' }); }
    };
  }
}

export default Auth;
