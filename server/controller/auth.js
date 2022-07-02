import User from "../database/modles/User.js";
import bcrypt from "bcryptjs";
import custamozeError from "../utils/custamozeError.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new User({
      username: username,
      email: email,
      password: hashPassword,
    });
    await newUser.save();
    const token = await jwt.sign({ id: newUser._id, isAdmin:newUser.isAdmin }, process.env.jwtKey);
    res
      .cookie("id", token, { httpOnly: true })
      .status(201)
      .json("create user successfly");
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;
  //التاكد انه اليوزر موجود
  //كومبير للباس
  //نعمل توكن ونرسله بالكوكي
  try {
    const userAccount = await User.findOne({ username });
    if (!userAccount) {
      throw custamozeError(404, "user not found");
    }
    const comparePassword = await bcrypt.compare(
      password,
      userAccount.password
    );
    if (!comparePassword) {
      throw custamozeError(401, "password not match");
    }
    //بالسينك والاويت ما بنستخدم بروميس عشان هيك ما حولناها لبروميس
    const token = await jwt.sign(
      { id: userAccount._id, isAdmin: userAccount.isAdmin },
      process.env.jwtKey
    );
    const { isAdmin, ...otherDetails } = userAccount._doc;

    res
      .cookie("id", token, { httpOnly: true })
      .status(200)
      .json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    console.log(err)
    next(err);
  }
};
export { register, login };
