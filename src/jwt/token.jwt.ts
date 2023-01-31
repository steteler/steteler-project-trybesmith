import jwt, { SignOptions } from 'jsonwebtoken';

import { User } from '../interfaces/index';

const secret = process.env.JWT_SECRET || 'secret';
const jwtConfig = { algorithm: 'HS256', expiresIn: '7d' };

function getToken(result: number, user: User) {
  const payload = {
    id: result,
    username: user.username,
  };
  
  const token = jwt.sign({ payload }, secret, jwtConfig as SignOptions);
  return token;
}

export default getToken;