import express from "express";
import {
    createUser,
    deleteUser,
    getUsers, 
    getUsersById,
    loginUser,
    getDokter,
    getDokterById,
    createDokter,
    updateDokter,
    deleteDokter,
    getPeriksa,
    getPeriksaById,
    createPeriksa,
    updatePeriksa,
    deletePeriksa,
} from "../controller/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.delete('/users/:id', deleteUser);
router.post('/login', loginUser);

router.get("/doctor", getDokter);
router.get("/dokter/:id_dokter", getDokterById);
router.post("/add-doctor", createDokter);
router.put("/dokter/:id_dokter", updateDokter);
router.delete("/dokter/:id_dokter", deleteDokter);

router.get("/checkup", getPeriksa);
router.get("/periksa/:id_periksa", getPeriksaById);
router.post("/add-checkup", createPeriksa);
router.put("/periksa/:id_periksa", updatePeriksa);
router.delete("/periksa/:id_periksa", deletePeriksa);

export default router;
