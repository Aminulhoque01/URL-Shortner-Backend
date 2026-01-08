"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const url_route_1 = __importDefault(require("./modules/url/url.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({ message: "server is running" });
});
app.use("/api/auth", auth_route_1.default);
app.use("/api/url", url_route_1.default);
const PORT = process.env.PORT || 5000;
(async () => {
    await (0, db_1.connectDB)();
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})();
