import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/index';

async function getAllProducts(): Promise<Product[]> {
  const [products] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return products as Product[];
}

async function createProduct(product: Product): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUE (?, ?)',
    [...Object.values(product)],
  );

  return insertId;
}

export default {
  getAllProducts,
  createProduct,
};