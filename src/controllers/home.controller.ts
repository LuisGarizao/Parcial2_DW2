import { Request, Response } from "express";
import path from "path";

export class homeController {
	static async index(req: any, res: any) {
    const ruta = path.join(__dirname,"home.html")
		res.sendFile(ruta);
	}
}
