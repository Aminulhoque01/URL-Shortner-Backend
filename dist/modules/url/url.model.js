import { Schema, model } from "mongoose";
const urlSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    originalUrl: { type: String, required: true },
    shortCode: { type: String, unique: true, required: true },
    clicks: { type: Number, default: 0 },
}, { timestamps: true });
export const Url = model("Url", urlSchema);
