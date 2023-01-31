import jwt, { Secret } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Token } from '../interfaces/index';

const secret = process.env.JWT_SECRET || 'secret';

function validateToken(req: Request, res: Response, next: NextFunction):void {
  const token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: 'Token not found' });
    return;
  }

  try {
    const data = jwt.verify(token, secret as Secret);

    const { payload } = data as Token;

    req.body.user = payload;

    next();
  } catch (_err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

export default validateToken;
