import { UrlService } from "./url.service.js";
const createShortUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;
        const url = await UrlService.createShortUrlService(req.user.userId, originalUrl);
        res.status(201).json({
            shortUrl: `${process.env.BASE_URL}/${url.shortCode}`,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const getUserUrls = async (req, res) => {
    const urls = await UrlService.getUserUrlsService(req.user.userId);
    res.json(urls);
};
const deleteUrl = async (req, res) => {
    await UrlService.deleteUrlService(req.params.id);
    res.json({ message: "Deleted" });
};
const redirectUrl = async (req, res) => {
    try {
        const originalUrl = await UrlService.redirectService(req.params.code);
        res.redirect(originalUrl);
    }
    catch {
        res.status(404).json({ message: "Not found" });
    }
};
export const UrlController = {
    createShortUrl,
    getUserUrls,
    deleteUrl,
    redirectUrl,
};
