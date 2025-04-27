import path from "path";
import Report from "../models/report";
import { Op } from "sequelize";

export class reportController {
	constructor() {}

	static async getAll(req: any, res: any) {
		let reportes = await Report.findAll();
		res.json(reportes);
	}

	static async getByCity(req: any, res: any) {
		let reportes = await Report.findAll({
			where: { Ciudad: {[Op.iLike]:req.params.city} },
		});
		// return await Report.findAll({where: {Ciudad : city}})
		res.json(reportes);
	}

	
	static async formCity(req: any, res: any) {
		const ruta = path.join(__dirname,"searchReports.html")
		res.sendFile(ruta);
	}
}
