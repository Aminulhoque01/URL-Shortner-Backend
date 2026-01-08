import { AuthService } from "./auth.service.js";
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthService.registerUser(email, password);
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
        const token = await AuthService.loginUser(email, password);
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
export const AuthController = {
    register,
    login,
};
