import sequelize from "../DB/DB";

import Report from "./report";
import City from "./city";
// import Posts from "./post.model";

const setupDB = () => {
	(async () => {
		City.hasMany(Report, { foreignKey: "ID" });
		Report.hasOne(City, { foreignKey: "ID" });

		// await sequelize.sync({ force: true });
	})();
};

export default setupDB;
