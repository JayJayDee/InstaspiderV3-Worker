import { Logger } from "./types";
import vanilaLogger from './vanila-logger';

export let log: Logger = null;

export const initLogger = () => {
  log = vanilaLogger();
};