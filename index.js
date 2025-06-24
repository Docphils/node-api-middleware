import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.get("/", (req, res) => res.send("HELLO WORLD"));

// Catch-all 404 route
app.use((req, res) => {
    res.status(404).json({error: "You Have Entered an Invalid Route"});
});

app.listen(PORT);
