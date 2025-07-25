import { Response } from "express";

export const createError = (
  res: Response,
  statusCode: number,
  message: string
) => {
  return res.status(statusCode).json({ message: message });
};
