import { Router } from "express";
import { getExpensesByCategory } from "../controllers";

const router = Router();
router.get("/", getExpensesByCategory);

export default router;
