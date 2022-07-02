import Room from "../database/modles/Room.js";
import Hotle from "../database/modles/Hotle.js";

const createRoom = async (req, res, next) => {
  const hotleId = req.params.hotleid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotle.findByIdAndUpdate(hotleId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (err) {
      naxt(err);
    }
    res.status(201).json("create roon success".savedRoom);
  } catch (err) {
    next(err);
  }
};

const updateRoom = async (req, res, next) => {
  const { id } = req.params;
  try {
    const saveRoom = await Room.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(saveRoom);
  } catch (err) {
    next(err);
  }
};
const DeleteRoom = async (req, res, next) => {
  const hotleId = req.params.hotleid;
  const { id } = req.params;
  try {
    const deleteRoom = await Room.findByIdAndDelete(id);
    try {
      await Hotle.findByIdAndUpdate(hotleId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      naxt(err);
    }
    res.status(200).json("delete room ");
  } catch (err) {
    next(err);
  }
};

const getRoomById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const GetRoom = await Room.findById(id);
    res.status(200).json(GetRoom);
  } catch (err) {
    next(err);
  }
};

const getAllRoom = async (req, res, next) => {
  try {
    const GetRooms = await Room.find();
    res.status(200).json(GetRooms);
  } catch (err) {
    next(err);
  }
};
const updateRoomValiable = async (req, res, next) => {
  try {
    await Room.updateOne(
      { "roomNumbers._id": req.params.id },
      {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Room status has been updated.");
  } catch (err) {
    next(err);
  }
};
export {
  createRoom,
  updateRoom,
  DeleteRoom,
  getRoomById,
  getAllRoom,
  updateRoomValiable,
};
