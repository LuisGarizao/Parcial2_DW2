import { DataTypes } from "sequelize";
import sequelize from "../DB/DB";

const City = sequelize.define("City", {
	ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	Nombre: { type: DataTypes.STRING, allowNull: false },
	Pais: { type: DataTypes.STRING, allowNull: false },
});

export default City