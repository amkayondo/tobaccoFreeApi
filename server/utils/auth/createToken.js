import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const { DEV_SECRET_KEY } = process.env;

const makeToken = (data) => {
  const token = jwt.sign(data, DEV_SECRET_KEY, { expiresIn: '7days' });
  return token;
};

export default makeToken;
