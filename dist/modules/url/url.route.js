import { Router } from "express";
import { protect } from "../../middlewares/auth.middleware.js";
import { UrlController } from "./url.controller.js";
const router = Router();
router.post("/", protect, UrlController.createShortUrl);
router.get("/", protect, UrlController.getUserUrls);
router.delete("/:id", protect, UrlController.deleteUrl);
router.get("/:shortCode", UrlController.redirectUrl);
export default router;
