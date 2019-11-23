# UsedThingsBot
used-things bot & notifier. written with puppeteer & typescript.

## What is this?
TBD.

## How to run
```bash
npm install
npm run dev # for start worker via MessageQueue
npm run dev:play # for run site-specific-commands in playground.ts
```

## How to configure
this application uses a dotenv as environment variables injector. so before run for development, you must supply the `.env` file containing following contents.
```bash
SITE_CLIEN_ENABLED=true
SITE_CLIEN_ID= # clien.net user id
SITE_CLIEN_PASSWORD= # clien.net password
SITE_BUNJANG_ENABLED=true
SITE_BUNJANG_ID= # 번개장터(bunjang.co.kr) user id
SITE_BUNJANG_PASSWORD= # 번개장터(bunjang.co.kr) user password
QUEUE_TYPE=AMQP # AMQP server only, AWS-SQS will be supported!
QUEUE_TOPIC_RESULT=  # queue/topic name. result will be pushed.
AMQP_HOST= # AMQP server host
AMQP_PORT= # AMQP server port, number
AMQP_LOGIN= # AMQP server user id
AMQP_PASSWORD= # AMQP password.
```