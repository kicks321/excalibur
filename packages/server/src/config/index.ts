import { Configuration, Maybe } from "src/@types";
require("dotenv").config();

const convertToInt = (value?: string): Maybe<number> => {
  if (typeof value === "string") return Number.parseInt(value);
  return null;
};

const Config: Configuration = {
  port: convertToInt(process.env.PORT),
};

export default Config;
