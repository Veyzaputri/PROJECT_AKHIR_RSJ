import { Sequelize, DataTypes } from "sequelize";
import db from "../config/Database.js";

// ==============================
//           USER MODEL
// ==============================

const User = db.define('users', {
  username: DataTypes.STRING,
  password: DataTypes.STRING,
}, {
  freezeTableName: true
});

// ==============================
//          PASIEN MODEL
// ==============================

const Pasien = db.define('pasien', {
  nama: Sequelize.STRING,
  tgl_lahir: Sequelize.STRING,
  gender: Sequelize.STRING,
  no_telp: Sequelize.STRING,
  alamat: Sequelize.STRING,
}, {
  freezeTableName: true
});

// ==============================
//         SYNC DATABASE
// ==============================

db.sync().then(() => console.log("Database synced")).catch(err => console.error(err));

export { User, Pasien };
