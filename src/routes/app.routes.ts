import { Router } from "express";
import { initialApp } from "../controllers/app.controllers";
const router = Router();
router.get("/", initialApp);

export default router;
