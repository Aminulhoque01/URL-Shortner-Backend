import { generateShortCode } from "../../utils/generateShortCode";
import { Url } from "./url.model";


const createShortUrlService = async (
  userId: string,
  originalUrl: string
) => {
  const count = await Url.countDocuments({ userId });
  if (count >= 100) throw new Error("Free tier limit reached");

  const shortCode = generateShortCode(7);

  return Url.create({ userId, originalUrl, shortCode });
};

const getUserUrlsService = (userId: string) => {
  return Url.find({ userId }).sort({ createdAt: -1 });
}

 const deleteUrlService = (id: string) => {
  return Url.findByIdAndDelete(id);
};

export const UrlService={
  createShortUrlService,
  getUserUrlsService,
  deleteUrlService
}