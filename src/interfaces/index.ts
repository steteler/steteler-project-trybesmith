interface Product {
  id?: number;
  name: string;
  amount: string;
}

interface Response {
  type: number | null;
  message: string | unknown;
}

interface User {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

interface OrderWithProduct {
  userId: number;
  productsIds: number[];
}

interface Order extends OrderWithProduct{
  id: number;
}

interface Token {
  payload: {
    id: number;
    username: string;
  }
}

export {
  Product,
  Response,
  User,
  Order,
  Token,
};
