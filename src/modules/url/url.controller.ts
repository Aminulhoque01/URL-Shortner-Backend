import { Response } from "express";
import { UrlService } from "./url.service";


const createShortUrl = async (req: any, res: Response) => {
  try {
    const { originalUrl } = req.body;
    const url = await UrlService.createShortUrlService(req.user.userId, originalUrl);

    res.status(201).json({
      shortUrl: `${process.env.BASE_URL}/${url.shortCode}`
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const UrlController={
  createShortUrl,
}