import express from "express";
import { verifyUser, verifyToken, verifyAdmin } from "../utils/verifyToken.js";
import {
  updateUser,
  DeleteUser,
  getUserlById,
  getAllUser,
} from "../controller/user.js";

const router = express.Router();

// router.get('/reqw/:id', verifyAdmin,(req, res) => {
//   res.send('hello delete admin')
// })

//update a hotel
router.put("/:id", verifyUser, updateUser);
//delete a hotel
router.delete("/:id", verifyUser, DeleteUser);
//get a hotel
router.get("/:id", verifyUser, getUserlById);
//get all hotels
router.get("/", verifyAdmin, getAllUser);
export default router;
