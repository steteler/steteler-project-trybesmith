import { Order } from '../interfaces';
import orderModel from '../models/order.model';

async function getAllOrders(): Promise<Order[]> {
  const orders = await orderModel.getAllOrders();
  
  return orders; 
}

async function createOrderList(userId: number, order: number[]) {
  const newProduct = await orderModel.createOrderList(userId, order);

  return newProduct;
}

export default {
  getAllOrders,
  createOrderList,
};