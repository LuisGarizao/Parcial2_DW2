import { Op } from "sequelize";
import City from "../models/city";
import path from 'path';

export class cityController {
	constructor() {}

	static async getAll(req: any, res: any) {
		let ciudades = await City.findAll();
		res.json(ciudades);
	}

	static async getByCity(req: any, res: any) {
		let ciudad = await City.findOne({ where: { Nombre: {[Op.iLike]:req.params.city} } });
		res.json(ciudad);
	}

	static async formCity(req: any, res: any) {
        const ruta = path.join(__dirname,"searchCity.html")
		res.sendFile(ruta);
	}
}
