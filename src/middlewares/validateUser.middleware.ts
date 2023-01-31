import { Request, Response, NextFunction } from 'express';
import { userValidation } from '../validations/user.validation';

function validateUser(req: Request, res: Response, next: NextFunction) {
  const { error } = userValidation.validate(req.body);

  if (error) {
    if (error.details[0].type === 'any.required') {
      return res.status(400).json({ message: error.details[0].message });
    }
    return res.status(422).json({ message: error.details[0].message });
  }

  next();
}

export default validateUser;