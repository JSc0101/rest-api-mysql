import express from "express";
import morgan from 'morgan';


const app = express();
app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"));
