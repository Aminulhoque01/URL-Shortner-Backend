"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const auth_model_1 = require("./auth.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const registerUser = async (email, password) => {
    const exists = await auth_model_1.User.findOne({ email });
    if (exists)
        throw new Error("User already exists");
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    return auth_model_1.User.create({ email, password: hashedPassword });
};
const loginUser = async (email, password) => {
    const user = await auth_model_1.User.findOne({ email });
    if (!user)
        throw new Error("Invalid credentials");
    const isMatch = await bcrypt_1.default.compare(password, user.password);
    if (!isMatch)
        throw new Error("Invalid credentials");
    const token = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return token;
};
exports.AuthService = {
    registerUser,
    loginUser,
};
