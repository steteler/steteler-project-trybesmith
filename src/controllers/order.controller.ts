import { Request, Response } from 'express';
import orderService from '../services/order.service';

async function getAllOrders(_req: Request, res: Response) {
  const orders = await orderService.getAllOrders();

  res.status(200).json(orders);
}

async function createOrderList(req: Request, res: Response) {
  const { user: { id: userId }, productsIds } = req.body;

  const newProducts = await orderService.createOrderList(userId, productsIds);

  if (!newProducts) {
    return res.status(500).json({ message: 'Order not saved' });
  }
  
  res.status(201).json({ userId, productsIds });
}

export default {
  getAllOrders,
  createOrderList,
};