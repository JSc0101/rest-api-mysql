import { Router } from "express";
import { initialApp, saveProducts } from "../controllers/app.controllers";
const router = Router();

router.get("/", initialApp);
router.post("/", saveProducts);

export default router;
