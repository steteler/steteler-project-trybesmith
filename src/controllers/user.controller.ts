import { Request, Response } from 'express';
import userService from '../services/user.service';

async function getUserByName(req: Request, res: Response) {
  const user = req.body;

  const { type, message } = await userService.getUserByName(user);

  if (type) {
    return res.status(type).json({ message });
  } 

  res.status(200).json({ token: message });
}

async function createUser(req: Request, res: Response) {
  const user = req.body;
  const { type, message } = await userService.createUser(user);

  if (type) return res.status(type).json({ message });

  res.status(201).json({ token: message });
}

export default {
  getUserByName,
  createUser,
};