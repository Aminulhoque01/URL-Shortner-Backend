"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Url = void 0;
const mongoose_1 = require("mongoose");
const urlSchema = new mongoose_1.Schema({
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    originalUrl: { type: String, required: true },
    shortCode: { type: String, unique: true, required: true },
    clicks: { type: Number, default: 0 },
}, { timestamps: true });
exports.Url = (0, mongoose_1.model)("Url", urlSchema);
