import { Sequelize } from "sequelize";
// import dotenv from 'dotenv';
import dotenv from "dotenv";

dotenv.config();
// console.log(process.env)

let database: string = process.env.DATABASE ?? "";
let user: string = process.env.USER ?? "";
let password: string = process.env.PASSWORD ?? "";
let host: string = process.env.HOST ?? "";
let port: any = process.env.PORT ?? "";

const sequelize = new Sequelize(database, user, password, {
	host: host,
	port: port,
	dialect: "postgres",
});

(async () => {
	try {
		await sequelize.authenticate();
		console.log("-----------------------------------\nCONECTADO\n-------------------------------------");
		
	} catch (error) {
		console.error("No se pudo conectar a la base de datos.", error);
	}
})();

export default sequelize;
