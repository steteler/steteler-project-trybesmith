import { Request, Response, NextFunction } from 'express';
import { loginValidation } from '../validations/user.validation';

function validateLogin(req: Request, res: Response, next: NextFunction):void {
  const { error } = loginValidation.validate(req.body);

  if (error) {
    res.status(400).json({ message: error.details[0].message });
    return;
  }

  next();
}

export default validateLogin;