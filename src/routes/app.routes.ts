import { Router } from "express";
import { getBooks, saveBooks } from "../controllers/app.controllers";
const router = Router();

router.get("/", getBooks);
router.post("/", saveBooks);

export default router;
