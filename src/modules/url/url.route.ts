import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware";
import { UrlController } from "./url.controller";

const router = Router();

router.post("/", protect, UrlController.createShortUrl);

export default router;