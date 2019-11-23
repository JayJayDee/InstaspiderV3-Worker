import { queueConf } from '../configurations';
import { initAmqpQueue } from './amqp-queue';
import { log } from '../logger';

const tag = '[queue]';

type PublishResult = (payload: any) => Promise<void>;

export let publishResult: PublishResult = null;

export const initQueue = async () => {
  log.debug(`${tag} initializing queue..`);
  const qconf = queueConf();

  if (qconf.type === 'AMQP' && qconf.amqp) {
    log.debug(`${tag} using amqp-queue`);
    const amqps = await initAmqpQueue(qconf.amqp);

    publishResult =
      (payload: any) =>
        amqps.publish(qconf.topics.result, payload);
  }

  log.debug(`${tag} queue initialized`);
};