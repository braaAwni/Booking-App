import express from "express";
import {
  createRoom,
  DeleteRoom,
  updateRoom,
  getRoomById,
  getAllRoom,
  updateRoomValiable
} from "../controller/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create a new hotel
router.post("/:hotleid", verifyAdmin, createRoom);
//update a hotel
router.put("/:id", verifyAdmin, updateRoom);

router.put("/avalable/:id", updateRoomValiable);
//delete a hotel
router.delete("/:id/:hotleid", verifyAdmin, DeleteRoom);
//get a hotel
router.get("/:id", getRoomById);
//get all hotels
router.get("/", getAllRoom);

export default router;
