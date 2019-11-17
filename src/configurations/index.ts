import { loadConfigFromDotenv } from './config-loader';
import { ConfigReader, configReader } from './config-item-reader';

let read: ConfigReader = null;

export const initConfigurations = () => {
  const source = loadConfigFromDotenv();
  read = configReader({ source });
};

type HttpConfg = {
  port: number;
};
export const httpConf = (): HttpConfg => ({
  port: read({ key: 'HTTP_PORT' }),
});

type SiteConf = {
  site: 'CLIEN',
  enabled: boolean,
  credentials: {
    loginId: string,
    password: string,
  },
};
export const siteConf = () => {
  const siteConfs: SiteConf[] = [
    {
      site: 'CLIEN',
      enabled: read({ key: 'SITE_CLIEN_ENABLED', mandantory: false, defaultValue: false }) === 'true' ? true : false,
      credentials: {
        loginId: read({ key: 'SITE_CLIEN_ID', mandantory: false }),
        password: read({ key: 'SITE_CLIEN_PASSWORD', mandantory: false }),
      },
    },
  ];

  const filtered = siteConfs.filter((s) => s.credentials.loginId && s.credentials.password);
  if (filtered.length === 0) {
    throw new Error('Configuraion error: at least one site configuration needed');
  }
  return filtered;
};