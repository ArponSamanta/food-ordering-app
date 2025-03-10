import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoutes"
mongoose
.connect(process.env.MONGO_URL as string)
.then(()=>console.log("connected to database"));

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user",myUserRoute);

app.listen(7000, () => {
    console.log("server started on localhost:7000");
  });
