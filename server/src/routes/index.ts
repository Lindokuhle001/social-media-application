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
      ).then((user) => res.json({ user, msg: "Successfully create todo" }));
    } catch (error) {
      res.json({ msg: "registration failed", status: 500, route: "/auth/register" });
    }
  }
);

export default router;
