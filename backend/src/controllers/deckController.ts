import { Request, Response } from "express";
import prisma from "../prisma/client";

export const getDecks = async (req: Request, res: Response) => {
  const userId = req.user; // Retrieves user ID added by authMiddleware

  try {
    const decks = await prisma.deck.findMany({
      where: { userId },
    });
    res.status(200).json(decks);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve decks" });
  }
};

export const createDeck = async (req: Request, res: Response) => {
  const userId = req.user;
  const { title, description } = req.body;
  if (userId === undefined) {
    res.status(500).json({ message: "error"});
    return ;
  }

  try {
    const deck = await prisma.deck.create({
      data: {
        title,
        description,
        userId, // Associates the deck with the logged-in user
      },
    });
    res.status(201).json(deck);
  } catch (error) {
    res.status(500).json({ message: "Failed to create deck" });
  }
};
