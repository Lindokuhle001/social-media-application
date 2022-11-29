import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './routes/index'
import multer from "multer"
import helmet from 'helmet'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const port = process.env.NODE_PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use("api/v1/", router)


/* FILE STORAGE */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.listen(port, () => {
  console.log(`app listening on port: ${port}`);
});