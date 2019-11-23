import { connect, Channel } from 'amqplib';
import { log } from '../logger';

const tag = '[queue:amqp]';

type AmqpConfig = {
  host: string;
  port: number;
  login: string;
  password: string;
};

export const initAmqpQueue =
  async (conf: AmqpConfig) => {
    log.debug(`${tag} establishing connection with amqp server: ${conf.host} ..`);

    const connection = await connect({
      hostname: conf.host,
      username: conf.login,
      password: conf.password,
      port: conf.port,
    });
    log.debug(`${tag} connection with amqp server established.`);
    const channel = await connection.createChannel();

    const publish = createPublisher({ channel });
    return { publish };
  };

const createPublisher = ({ channel }: { channel: Channel }) =>
  async (queueName: string, payload: any) => {
    await channel.assertQueue(queueName);
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(payload)));
  };