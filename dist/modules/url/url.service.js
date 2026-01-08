"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const generateShortCode_1 = require("../../utils/generateShortCode");
const url_model_1 = require("./url.model");
const createShortUrlService = async (userId, originalUrl) => {
    const count = await url_model_1.Url.countDocuments({ userId });
    if (count >= 100)
        throw new Error("Free tier limit reached");
    const shortCode = (0, generateShortCode_1.generateShortCode)(7);
    return url_model_1.Url.create({ userId, originalUrl, shortCode });
};
const getUserUrlsService = (userId) => {
    return url_model_1.Url.find({ userId }).sort({ createdAt: -1 });
};
const deleteUrlService = (id) => {
    return url_model_1.Url.findByIdAndDelete(id);
};
const redirectService = async (code) => {
    const url = await url_model_1.Url.findOne({ shortCode: code });
    console.log(url);
    if (!url)
        throw new Error("Not found");
    url.clicks += 1;
    await url.save();
    return url.originalUrl;
};
exports.UrlService = {
    createShortUrlService,
    getUserUrlsService,
    deleteUrlService,
    redirectService
};
