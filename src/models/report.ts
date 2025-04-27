import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../DB/DB";

const Report = sequelize.define("Report", {
	ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	Ciudad: { type: DataTypes.STRING, allowNull: false },
	Fecha: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: Sequelize.literal('CURRENT_DATE') },
	Pronostico: { type: DataTypes.STRING, allowNull: false },
});

export default Report;
