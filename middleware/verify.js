const jwt = require("jsonwebtoken");

const verify = async (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }

  jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {

    if (err) {
      res.status(403).json({
        status: false,
        message: 'Session failed. Please login',
        error: err
      });

    } else {
          req.tokenDecoded=decoded;
          return next();
    }
  })
    .catch((err) => {
      res.status(403).json({
        status: false,
        message: 'Session failed. Please login'
      });
    });

};

module.exports = verify;