import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    username : DataTypes.STRING,
    password : DataTypes.STRING,

},{
    freezeTableName:true
});

const Dokter = dbContext.define('dokter', {
    id_dokter: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama_dokter: {
        type: DataTypes.STRING,
        allowNull: false
    },
    spesialis: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'dokter',
    freezeTableName: true,
    timestamps: false
});

const Periksa = dbContext.define('periksa', {
    id_periksa: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tanggal_periksa: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    biaya_periksa: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'periksa',
    freezeTableName: true,
    timestamps: false
});

export default User;
export { Dokter };
export { Periksa };

(async ()=> {
    await db.sync();
})();
