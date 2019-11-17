import { initLogger } from './logger';
import { initConfigurations } from './configurations';
import { initSites } from './site-commands';

(async () => {
  initLogger();
  initConfigurations();
  initSites();
})();