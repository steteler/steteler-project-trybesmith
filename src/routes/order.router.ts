import express from 'express';
import orderController from '../controllers/order.controller';
import validateOrder from '../middlewares/validateOrder.middleware';
import validateToken from '../middlewares/validateToken.middleware';

const orderRouter = express.Router();

orderRouter.get('/', orderController.getAllOrders);
orderRouter.post('/', validateToken, validateOrder, orderController.createOrderList);

export default orderRouter;