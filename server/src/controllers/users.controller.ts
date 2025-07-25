import { Request, Response } from "express";
import { createError } from "../libs";
import { prisma } from ".";

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await prisma.users.findMany({});
    res.status(200).json(users);
  } catch (error) {
    createError(res, 500, "Error retrieving users");
  }
};
