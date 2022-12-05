import express, { Request, Response } from 'express';
import { upload } from '../middleware/fileStorage';
import register from '../controller/register'

const router = express.Router()
router.use(express.json());

router.post("/auth/register",upload.single('picture'),(req: Request, res: Response) => {
    const { firstName, lastName, email, password, picturePath, friends, location, occupation } = req.body
    register(firstName, lastName, email, password, picturePath, friends, location, occupation)
})


export default router 