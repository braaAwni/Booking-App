import Hotle from "../database/modles/Hotle.js";
import Room from "../database/modles/Room.js";

const createHotle = async (req, res, next) => {
  const newHotle = new Hotle(req.body);
  try {
    const createHotel = await newHotle.save();
    res.status(201).json(createHotel);
  } catch (err) {
    next(err);
  }
};

const updateHotle = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateHotle = await Hotle.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateHotle);
  } catch (err) {
    next(err);
  }
};

const DeleteHotel = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteHotle = await Hotle.findByIdAndDelete(id);
    res.status(200).json("delete hotle ");
  } catch (err) {
    next(err);
  }
};

const getHotelById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const GetHotle = await Hotle.findById(id);
    res.status(200).json(GetHotle);
  } catch (err) {
    next(err);
  }
};

const getAllHotle = async (req, res, next) => {
  const { max, min, ...others } = req.query;
  try {
    const GetHotles = await Hotle.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 999 },
    }).limit(req.query.limit);
    res.status(200).json(GetHotles);
  } catch (err) {
    next(err);
  }
};
const getHotleByCount = async (req, res, next) => {
  const cities = req.query.cities.split(",");
  try {
    const GetHotles = await Promise.all(
      cities.map((city) => {
        return Hotle.countDocuments({ city: city });
      })
    );
    res.status(200).json(GetHotles);
  } catch (err) {
    next(err);
  }
};
const getHotleByType = async (req, res, next) => {
  try {
    const hotelCount = await Hotle.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotle.countDocuments({ type: "apartment" });
    const resortCount = await Hotle.countDocuments({ type: "resort" });
    const villaCount = await Hotle.countDocuments({ type: "villa" });
    const cabinCount = await Hotle.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
    next(err);
  }
};
const getAllroomToHotel = async (req, res, next) => {
  const id = req.params.hotelId;
  try {
    const rooms = await Hotle.findById(id);
    const roomList = await Promise.all(
      rooms.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(roomList);
  } catch (err) {
    next(err);
  }
};

export {
  createHotle,
  updateHotle,
  DeleteHotel,
  getHotelById,
  getAllHotle,
  getHotleByCount,
  getHotleByType,
  getAllroomToHotel,
};
