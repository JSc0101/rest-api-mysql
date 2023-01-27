import { Router } from "express";
import {
  deleteBooks,
  getBooks,
  saveBooks,
  userById,
} from "../controllers/app.controllers";
const router = Router();

router.get("/", getBooks);
router.post("/", saveBooks);
router.get("/:id", userById);
router.delete("/:id", deleteBooks);

export default router;
