import { Schema, model } from "mongoose";
import { IUrl } from "./url.interface";

const urlSchema = new Schema<IUrl>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    originalUrl: { type: String, required: true },
    shortCode: { type: String, unique: true },
    clicks: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Url = model<IUrl>("Url", urlSchema);
