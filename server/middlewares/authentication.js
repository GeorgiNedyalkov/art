const jwt = require("../lib/jsonwebtoken");

exports.authentication = async (req, res, next) => {
  const token = req.cookies["auth"];

  // check if token exists
  if (token) {
    try {
      // decode the token with jwt and secret
      const decodedToken = await jwt.verify(token, process.env.SECRET);
      // add the user token to the request
      req.user = decodedToken;
      // add isAuthenticated and user to response locals
      res.locals.isAuthenticated = true;
      res.locals.user = decodedToken;
    } catch (error) {
      res.clearCookie("auth");

      return res.status(401);
    }
  }

  next();
};

// exports.isAuth = async (req, res, next) => {
//   if (!req.user) {
//     return;
//   }

//   next();
// };
