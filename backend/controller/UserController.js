import { where } from "sequelize";
import User from "../models/UserModel.js";
import Pasien from "../models/PasienModel.js";

// ==============================
//            USER
// ==============================

// GET all users
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET user by ID
export const getUsersById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE user
export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE user
export const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

// LOGIN user
export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    if (user.password !== password) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    res.status(200).json({ msg: "Login successful", user: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// ==============================
//           PASIEN
// ==============================

// GET all pasien
export const getPasien = async (req, res) => {
  try {
    const response = await Pasien.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// GET pasien by ID
export const getPasienById = async (req, res) => {
  try {
    const response = await Pasien.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE pasien
export const createPasien = async (req, res) => {
  try {
    const inputResult = req.body;
    await Pasien.create(inputResult);
    res.status(201).json({ msg: "Pasien Created" });
  } catch (error) {
    console.log(error.message);
  }
};

// UPDATE pasien
export const updatePasien = async (req, res) => {
  try {
    await Pasien.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pasien Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE pasien
export const deletePasien = async (req, res) => {
  try {
    await Pasien.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Pasien Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
