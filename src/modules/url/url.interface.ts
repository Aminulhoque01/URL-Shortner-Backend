import { Document, Types } from "mongoose";

export interface IUrl extends Document {
  userId: Types.ObjectId;
  originalUrl: string;
  shortCode: string;
  clicks: number;
  createdAt: Date;
  updatedAt: Date;
}
