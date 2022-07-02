import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createHotle,
  updateHotle,
  DeleteHotel,
  getHotelById,
  getAllHotle,
  getHotleByCount,
  getHotleByType,
  getAllroomToHotel,
} from "../controller/hotle.js";

const router = express.Router();

//create a new hotel
router.post("/", verifyAdmin, createHotle);
//update a hotel
router.put("/:id", verifyAdmin, updateHotle);
//delete a hotel
router.delete("/:id", verifyAdmin, DeleteHotel);

router.get("/bycount", getHotleByCount);
router.get("/bytype", getHotleByType);
//get a hotel
router.get("/:id", getHotelById);
//get all hotels
router.get("/", getAllHotle);

router.get("/", getAllHotle);
// get all room to the hotel
router.get("/room/:hotelId", getAllroomToHotel);
export default router;
