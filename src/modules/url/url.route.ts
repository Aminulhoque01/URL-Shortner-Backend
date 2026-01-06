import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware";
import { UrlController } from "./url.controller";

const router = Router();

router.post("/", protect, UrlController.createShortUrl);
router.get("/", protect, UrlController.getUserUrls);
router.delete("/:id", protect, UrlController.deleteUrl);

export default router;