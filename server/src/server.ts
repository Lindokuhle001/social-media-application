import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './routes/index'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from "body-parser";
// import path from 'path'
// import { fileURLToPath } from 'url'

const port = process.env.NODE_PORT || 3000;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(bodyParser.json({ limit: "30mb"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
// app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("api/v1/", router)

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});