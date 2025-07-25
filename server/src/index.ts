import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import dotenv from "dotenv";
import {
  dashboardRoute,
  expenseRoute,
  productRoute,
  userRoute,
} from "./routes";
// ROUTE IMPORTS

// CONFIGURATIONS
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory Management System API");
});

app.use("/api/dashboard", dashboardRoute);
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
app.use("/api/expenses", expenseRoute);

// SERVER
const port = Number(process.env.PORT) || 5000;
app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});
