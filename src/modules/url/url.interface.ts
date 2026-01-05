import mongoose from "mongoose";

export interface IUrl {
  userId: mongoose.Types.ObjectId;
  originalUrl: string;
  shortCode: string;
  clicks: number;
}
