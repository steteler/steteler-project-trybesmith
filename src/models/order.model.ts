import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { Order } from '../interfaces/index';
import connection from './connection';
import productModel from './product.model';

async function getAllOrders(): Promise<Order[]> {
  const [orders] = await connection.execute<RowDataPacket[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.orders o
      JOIN Trybesmith.products p
      ON o.id = p.order_id
      GROUP BY o.id`,
  );

  return orders as Order[];
}

async function createOrder(userId: number): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.orders (user_id) VALUE (?)',
    [userId],
  );
  return insertId;
}

async function createOrderList(userId: number, order: number[]): Promise<number> {
  const t = await connection.getConnection();
  try {
    await t.beginTransaction();

    const newOrder = await createOrder(userId);

    if (newOrder) {
      await Promise.all(
        order.map(async (productId) => productModel.updateProduct(productId, newOrder)),
      );
      await t.commit();
      return newOrder;
    }
  } catch (_error) {
    await t.rollback();
  }
  return 0;
}

export default {
  getAllOrders,
  createOrderList,
};