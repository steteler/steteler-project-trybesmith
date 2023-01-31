import { Order } from '../interfaces';
import orderModel from '../models/order.model';

async function getAllOrders(): Promise<Order[]> {
  const orders = await orderModel.getAllOrders();
  
  return orders; 
}

export default {
  getAllOrders,
};