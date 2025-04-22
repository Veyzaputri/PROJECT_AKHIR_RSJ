import { where } from "sequelize";
import User from "../models/UserModel.js";
import Dokter from "../models/UserModel.js";
import Periksa from "../models/UserModel.js";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
export const getUsersById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg:"User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}

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

    // Cek password (tanpa bcrypt, langsung cocokkan)
    if (user.password !== password) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    // Jika login sukses
    res.status(200).json({ msg: "Login successful", user: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getDokter = async (req, res) => {
    try {
        const response = await Dokter.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getDokterById = async (req, res) => {
    try {
        const doctor = await Dokter.findOne({
            where: { id_dokter: req.params.id_dokter }
        });

        if (!doctor) {
            return res.status(404).json({ msg: "Dokter tidak ditemukan" });
        }

        res.status(200).json(doctor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
}

export const createDokter = async (req, res) => {
    try {
        const inputResult = req.body;
        await Dokter.create(inputResult);
        res.status(201).json({ msg: "Doctor created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateDokter = async (req, res) => {
    try {
        await Dokter.update(req.body, {
            where: {
                id_dokter: req.params.id_dokter
            }
        });
        res.status(200).json({ msg: "This Doctor Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteDokter = async (req, res) => {
    try {
        await Dokter.destroy({
            where: {
                id_dokter: req.params.id_dokter
            }
        });
        res.status(200).json({ msg: "This Doctor Completed Detele" });
    } catch (error) {
        console.log(error.message);
    }
}

export const getPeriksa = async (req, res) => {
    try {
        const response = await Periksa.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getPeriksaById = async (req, res) => {
    try {
        const checkup = await Periksa.findOne({
            where: { id_periksa: req.params.id_periksa }
        });

        if (!checkup) {
            return res.status(404).json({ msg: "Checkup tidak ditemukan" });
        }

        res.status(200).json(doctor);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: "Terjadi kesalahan server" });
    }
}

export const createPeriksa = async (req, res) => {
    try {
        const inputResult = req.body;
        await Periksa.create(inputResult);
        res.status(201).json({ msg: "Checkup created" });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePeriksa = async (req, res) => {
    try {
        await Periksa.update(req.body, {
            where: {
                id_periksa: req.params.id_periksa
            }
        });
        res.status(200).json({ msg: "This Checkup Updated" });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePeriksa = async (req, res) => {
    try {
        await Periksa.destroy({
            where: {
                id_periksa: req.params.id_periksa
            }
        });
        res.status(200).json({ msg: "This Checkup Completed Detele" });
    } catch (error) {
        console.log(error.message);
    }
}
