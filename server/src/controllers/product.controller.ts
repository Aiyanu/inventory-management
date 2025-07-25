import { Request, Response } from "express";
import { createError } from "../libs";
import { prisma } from ".";

export const getProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const search = req.query.search as string;
    const products = await prisma.products.findMany({
      where: {
        name: {
          contains: search || "",
        },
      },
    });
    res.status(200).json(products);
    return;
  } catch (error) {
    createError(res, 500, "Error retrieving products");
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { productId, name, price, rating, stockQuantity } = req.body;
    const product = await prisma.products.create({
      data: {
        productId,
        name,
        price,
        rating,
        stockQuantity,
      },
    });
    return res.status(201).json(product);
  } catch (error) {
    return createError(res, 500, "Error creating product");
  }
};
