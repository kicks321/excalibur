import { Configuration, Nullable } from 'src/@types';
import { config } from 'dotenv';
config();

const convertToInt = (value?: string): Nullable<number> => {
  if (typeof value === 'string') return Number.parseInt(value);
  return null;
};

const Config: Configuration = {
  port: convertToInt(process.env.PORT),
};

export default Config;
