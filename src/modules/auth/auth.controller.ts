import { Request, Response } from "express";
import { AuthService } from "./auth.service";



const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await AuthService.registerUser(email, password);

    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (error: any) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};

export const AuthController={
  register,
  login,
}