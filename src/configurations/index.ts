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
  site: 'CLIEN' | 'BUNJANG',
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
    {
      site: 'BUNJANG',
      enabled: read({ key: 'SITE_BUNJANG_ENABLED', mandantory: false, defaultValue: false }) === 'true' ? true : false,
      credentials: {
        loginId: read({ key: 'SITE_BUNJANG_ID', mandantory: false }),
        password: read({ key: 'SITE_BUNJANG_PASSWORD', mandantory: false }),
      },
    },
  ];

  const filtered = siteConfs.filter((s) => s.credentials.loginId && s.credentials.password);
  if (filtered.length === 0) {
    throw new Error('Configuraion error: at least one site configuration needed');
  }
  return filtered;
};

type QueueConf = {
  type: 'AMQP';
  amqp?: QueueAmqpConf;
  topics: {
    result: string;
  }
};
type QueueAmqpConf = {
  host: string;
  port: number;
  login: string;
  password: string;
};
export const queueConf = (): QueueConf => {
  const type = read({ key: 'QUEUE_TYPE', mandantory: true });
  let amqp: QueueAmqpConf = null;

  if (type === 'AMQP') {
    amqp = {
      host: read({ key: 'AMQP_HOST', mandantory: true }),
      port: read({ key: 'AMQP_PORT', mandantory: true }),
      login: read({ key: 'AMQP_LOGIN', mandantory: true }),
      password: read({ key: 'AMQP_PASSWORD', mandantory: true }),
    };
  }

  const topics = {
    result: read({ key: 'QUEUE_TOPIC_RESULT', mandantory: true }),
  };

  return { type, amqp, topics };
};