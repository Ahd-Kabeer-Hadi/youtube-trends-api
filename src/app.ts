import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Request } from "express";
import trendsRoutes from "./routes/trendsRoutes";
import {
  cacheMiddleware,
  rateLimitMiddleware,
  loggingMiddleware,
} from "./middlewares";
import { errorHandler } from "./utils/errorHandler";

dotenv.config();

const app = express();

app.use(cors<Request>());

app.use(express.json());
app.use(loggingMiddleware);
app.use(rateLimitMiddleware);
app.use(cacheMiddleware);

app.use("/api/trends", trendsRoutes);
app.use(errorHandler);

export default app;
