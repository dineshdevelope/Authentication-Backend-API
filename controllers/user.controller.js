import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const singleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: "Can't Find User" });
    } else {
      res.json(user);
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const newuser = new User({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    const user = await newuser.save();
    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const editUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      {
        username: req.body.username,
        password: req.body.password,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findById(req.params.id).deleteOne();
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
