import express from 'express';
import productController from '../controllers/product.controller';
import validateProduct from '../middlewares/validateProduct.middleware';

const productRouter = express.Router();

productRouter.get('/', productController.getAllProducts);
productRouter.post('/', validateProduct, productController.createProduct);

export default productRouter;