import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import prisma from "../prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";

// Recording function
export const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Check if the user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: "Email already registered" });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    res
      .status(201)
      .json({ message: "User created successfully", userId: user.id });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};

// Connection function
export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    // Search user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      res.status(400).json({ message: "Invalid email or password" });
      return;
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: "An error occurred", error });
  }
};
