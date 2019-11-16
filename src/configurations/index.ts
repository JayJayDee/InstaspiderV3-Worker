import { loadConfigFromDotenv } from './config-loader';
import { ConfigReader, configReader } from './config-item-reader';

let read: ConfigReader = null;

export const initConfigurations = () => {
  const source = loadConfigFromDotenv();
  read = configReader({ source });
};

export const http = () => ({
  port: read({ key: 'HTTP_PORT' }),
});