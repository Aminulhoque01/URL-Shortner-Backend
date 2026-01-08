"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await auth_service_1.AuthService.registerUser(email, password);
        res.status(201).json({
            message: "User registered successfully",
            data: user,
        });
    }
    catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
};
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await auth_service_1.AuthService.loginUser(email, password);
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
exports.AuthController = {
    register,
    login,
};
