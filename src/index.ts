import express from "express";
import morgan from "morgan";
import router from "./routes/app.routes";

const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(app.get("port"));
