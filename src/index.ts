import express from "express";
import morgan from "morgan";
import router from "./routes/app.routes";
import { conecct } from "./db";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(router);

console.log(conecct());
app.listen(app.get("port"));
console.log(`On port ${3000}`);
