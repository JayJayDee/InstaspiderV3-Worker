import * as dotenv from 'dotenv';

export const loadConfigFromDotenv = () => {
  dotenv.config();
  return process.env;
};