import productModel from '../models/product.model';
import { Product } from '../interfaces/index';

async function getAllProducts(): Promise<Product[]> {
  const products = await productModel.getAllProducts();

  return products; 
}

async function createProduct(product: Product): Promise<Product> {
  const id = await productModel.createProduct(product);

  return { id, ...product };
}

export default {
  getAllProducts,
  createProduct,
};