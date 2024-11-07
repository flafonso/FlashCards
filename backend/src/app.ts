import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
import deckRoutes from './routes/deckRoutes';


dotenv.config(); // Load environment variables (such as JWT_SECRET or DATABASE_URL)

const app = express();
app.use(express.json()); // Allows Express to read JSON data in queries

// Test route to check that the API is working
app.get("/api/health", (req, res) => {
  res.json({ message: "API is working!" });
});

app.use("/api/auth", authRoutes);

app.use('/api/decks', deckRoutes);

export default app;
