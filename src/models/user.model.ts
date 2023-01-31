import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import { User } from '../interfaces/index';

async function getUserbyName(user: User): Promise<User> {
  const [userFound] = await connection.execute<RowDataPacket[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );

  const [result] = userFound as User[];
  return result;
}

async function createUser(user: User): Promise<number> {
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.users (${Object.keys(user)}) VALUE (?, ?, ?, ?)`,
    [...Object.values(user)],
  );

  return insertId;
}

export default {
  getUserbyName,
  createUser,
};