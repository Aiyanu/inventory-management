import { Request, Response } from "express";
import { createError } from "../libs";
import { prisma } from ".";

export const getExpensesByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const expenseByCategorySummaryRaw = await prisma.expenseByCategory.findMany(
      {
        orderBy: {
          date: "desc",
        },
      }
    );
    const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
      (item) => ({
        ...item,
        amount: item.amount.toString(),
      })
    );
    res.status(200).json(expenseByCategorySummary);
  } catch (error) {
    createError(res, 500, "Error retrieving expenses by category");
  }
};
