import { Router } from "express";
import { getBooks, saveBooks, userById } from "../controllers/app.controllers";
const router = Router();

router.get("/", getBooks);
router.post("/", saveBooks);
router.get("/:id", userById);

export default router;
