import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./modules/auth/auth.route.js";
import urlRoutes from "./modules/url/url.route.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send({ message: "server is running" });
});
app.use("/api/auth", authRoutes);
app.use("/api/url", urlRoutes);
const PORT = process.env.PORT || 5000;
(async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})();
