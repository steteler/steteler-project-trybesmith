import { Request, Response, NextFunction } from 'express';
import orderValidation from '../validations/order.validation';

function validateOrder(req: Request, res: Response, next: NextFunction):void {
  const { productsIds } = req.body;

  const { error } = orderValidation.validate({ productsIds });

  if (error) {
    if (error.details[0].type === 'any.required') {
      res.status(400).json({ message: error.details[0].message });
      return;
    }
    res.status(422).json({ message: error.details[0].message });
    return;
  }

  next();
}

export default validateOrder;