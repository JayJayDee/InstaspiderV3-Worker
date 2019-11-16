import { Logger } from './types';
import { green, red, yellow } from 'chalk';

const vanilaLogger = (): Logger => ({
  info(...args) {
    console.info(...[green('info'), ...args]);
  },
  error(...args) {
    console.error(...[red('info'), ...args]);
  },
  debug(...args) {
    console.debug(...[yellow('info'), ...args]);
  },
});

export default vanilaLogger;