import express, { Request, Response } from "express";
import { upload } from "../middleware/fileStorage";
import register from "../controller/register";

const router = express.Router();
router.use(express.json());

router.post(
  "/auth/register",
  upload.single("picture"),
  (req: Request, res: Response) => {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;
    
    try {
      register(
        firstName,
        lastName,
        email,
        password,
        picturePath,
        friends,
        location,
        occupation
      ).then((data) => res.send(data));
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

export default router;
