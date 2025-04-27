import express from "express";
import { setRoutes } from "./helpers/routes.helper";

import { homeController } from "./controllers/home.controller";
import { reportController } from "./controllers/report.controller";
import { cityController } from "./controllers/city.controller";

import setupDB from "./models/index";

setupDB();

const app = express();
const port = 3500;

const router = express.Router();
let homeRoutes = setRoutes(router, [
	{ method: "get", path: "/", controller: homeController.index },
]);

let repRoutes = setRoutes(router, [
	{ method: "get", path: "/all", controller: reportController.getAll },
	{ method: "get", path: "/search/:city", controller: reportController.getByCity},
	{ method: "get", path: "/search", controller: reportController.formCity },
]);

let cityRoutes = setRoutes(router, [
	{ method: "get", path: "/all", controller: cityController.getAll },
	{ method: "get", path: "/search/:city", controller: cityController.getByCity },
	{ method: "get", path: "/search", controller: cityController.formCity },
]);

app.use("/", homeRoutes);
app.use("/reports", repRoutes);
app.use("/cities", cityRoutes);

app.listen(port, () => {
	console.log(`App ejecutando en http://localhost:${port}`);
});
