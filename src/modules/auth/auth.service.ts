import { User } from "./auth.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (email: string, password: string) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("User already exists");

  const hashedPassword = await bcrypt.hash(password, 10);
  return User.create({ email, password: hashedPassword });
};

export const AuthService={
  registerUser,
}