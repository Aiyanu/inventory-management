import { PrismaClient } from "@prisma/client";
import { getDashboardMetric } from "./dashboard.controller";
import { getProducts, createProduct } from "./product.controller";
import { getExpensesByCategory } from "./expense.controller";
import { getUsers } from "./users.controller";
export const prisma = new PrismaClient();

export {
  getDashboardMetric,
  getProducts,
  createProduct,
  getExpensesByCategory,
  getUsers,
};
