import User from "../database/modles/User.js";

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    next(err);
  }
};

const DeleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    res.status(200).json("delete User ");
  } catch (err) {
    next(err);
  }
};

const getUserlById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const GetUser = await User.findById(id);
    res.status(200).json(GetUser);
  } catch (err) {
    next(err);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const GetUsers = await User.find();
    res.status(200).json(GetUsers);
  } catch (err) {
    next(err);
  }
};

export { updateUser, DeleteUser, getUserlById, getAllUser };
