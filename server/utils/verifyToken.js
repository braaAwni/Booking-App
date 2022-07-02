import jwt from "jsonwebtoken";
import custamozeError from "./custamozeError.js";
//هاي على شان نشوف عامل لوج ان او لا
const verifyToken = (req, res, next) => {
  const { id } = req.cookies;
  if (!id) return next(custamozeError(401, "please login"));

  jwt.verify(id, process.env.jwtKey, (err, decoded) => {
    if (err) return next(custamozeError(403, "token is not valid"));

    req.user = decoded;
    next();
  });
};

//هان على شان نشوف هل هوا نفس الاي دي اللي واصل بالبارم ولا لا
const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(custamozeError(403, "you are not authorized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin === true) {
      next();
    } else {
      return next(custamozeError(403, "you are not authorized"));
    }
  });
};

export { verifyToken, verifyUser, verifyAdmin };
