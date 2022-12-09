import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import morgan from "morgan";
import connectDB from "./config/connectDB.js";
import methodOverride from "method-override";
//
dotenv.config();

//
const app = express();

//PORT
const port = process.env.PORT || 8081;
//methodOverride
app.use(methodOverride("_method"));
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

//Connect db
connectDB();
//
viewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
