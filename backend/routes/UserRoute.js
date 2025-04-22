import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  getUsersById,
  loginUser,
} from "../controller/UserController.js";

import {
  getPasien,
  getPasienById,
  createPasien,
  updatePasien,
  deletePasien,
} from "../controllers/CatatanController.js";

const router = express.Router();

// ==============================
//             USER
// ==============================
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.post("/users", createUser);
router.delete("/users/:id", deleteUser);
router.post("/login", loginUser);

// ==============================
//            PASIEN
// ==============================
router.get("/pasien", getPasien);
router.get("/pasien/:id", getPasienById);
router.post("/add-pasien", createPasien);
router.put("/pasien/:id", updatePasien);
router.delete("/pasien/:id", deletePasien);

export default router;
