import { Router } from "express";
import {
  deleteBooks,
  getBooks,
  saveBooks,
  userById,
  updateBooks
} from "../controllers/app.controllers";
const router = Router();

router.get("/", getBooks);
router.post("/", saveBooks);
router.get("/:id", userById);
router.delete("/:id", deleteBooks);
router.put("/:id", updateBooks);
export default router;
