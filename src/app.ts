import { initLogger, log } from './logger';
import { initConfigurations, http } from './configurations';

const tag = '[app]';

(async () => {
  initLogger();
  initConfigurations();

  log.info(`${tag} instaspider-worker started, port: ${http().port}`);
})();