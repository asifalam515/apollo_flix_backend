import express, { Request, Response } from "express";
import { MovieRoute } from "./modules/movie/movie.route";
const app = express();
const port = 3000;

app.use("/api", MovieRoute);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!22");
});
export default app;
