import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/index';
import connection from './connection';

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

export default {
  getAllOrders,
};