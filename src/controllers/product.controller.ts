import { Request, Response } from 'express';
import productService from '../services/product.service';

async function getAllProducts(_req: Request, res: Response) {
  const products = await productService.getAllProducts();

  res.status(200).json(products);
}

async function createProduct(req: Request, res: Response) {
  const newProduct = await productService.createProduct(req.body);

  res.status(201).json(newProduct);
}

export default {
  getAllProducts,
  createProduct,
};