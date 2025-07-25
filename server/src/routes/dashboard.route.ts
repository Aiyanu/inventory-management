import { Router } from "express";
import { getDashboardMetric } from "../controllers/dashboard.controller";

const router = Router();

router.get("/", getDashboardMetric);

export default router;
