import "dotenv/config";
import { app } from "./src/app.js";
import db from "./src/db/models";

const PORT = process.env.SERVER_PORT;

app.listen(PORT, async () => {
    try {
        await db.sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

    console.log(`정상적으로 서버를 시작하였습니다. http://localhost:${PORT}`);
});
