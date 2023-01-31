import userModel from '../models/user.model';
import { User, Response } from '../interfaces/index';
import getToken from '../jwt/token.jwt';

async function getUserByName(user: User): Promise<Response> {
  const userFound = await userModel.getUserbyName(user);

  if (!userFound || (user.password !== userFound.password)) {
    return { type: 401, message: 'Username or password invalid' };
  }

  return { type: 201, message: getToken(userFound.id as number, userFound) };
}

async function createUser(user: User): Promise<Response> {
  const newUser = await userModel.createUser(user);

  return { type: null, message: getToken(newUser, user) };
}

export default {
  getUserByName,
  createUser,
};