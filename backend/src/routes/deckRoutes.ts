import { Router } from "express";
import { createDeck, getDecks } from "../controllers/deckController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/all", authMiddleware, getDecks);
router.post("/create", authMiddleware, createDeck);

export default router;
