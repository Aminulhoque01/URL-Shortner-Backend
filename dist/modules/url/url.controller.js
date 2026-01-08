"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const url_service_1 = require("./url.service");
const createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const url = await url_service_1.UrlService.createShortUrlService(req.user.userId, originalUrl);
        res.status(201).json({
            shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getUserUrls = async (req, res) => {
    const urls = await url_service_1.UrlService.getUserUrlsService(req.user.userId);
    res.json(urls);
};
const deleteUrl = async (req, res) => {
    await url_service_1.UrlService.deleteUrlService(req.params.id);
    res.json({ message: "Deleted" });
};
const redirectUrl = async (req, res) => {
    try {
        const originalUrl = await url_service_1.UrlService.redirectService(req.params.code);
        res.redirect(originalUrl);
    }
    catch {
        res.status(404).json({ message: "Not found" });
    }
};
exports.UrlController = {
    createShortUrl,
    getUserUrls,
    deleteUrl,
    redirectUrl,
};
