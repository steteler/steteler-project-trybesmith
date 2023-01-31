import { Request, Response, NextFunction } from 'express';
import productValidation from '../validations/product.validation';

function validateProduct(req: Request, res: Response, next: NextFunction):void {
  const { error } = productValidation.validate(req.body);

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

export default validateProduct;
