const {getRedisService, EMAIL_QUEUE} = require("../commom/redis");

const parseMessage = (message) => JSON.parse(message)
const listenQueue = async ({ redis }) => {
  await redis.subscribe(EMAIL_QUEUE, (err) => {
    if (err) {
      console.error("Failed to subscribe: %s", err.message);
      return
    }
    console.log('Subscribed successfully!')
  })

  redis.on('message', (channel, message) => {
    const parsedMessage = parseMessage(message)
    console.log(`>> Received from ${channel}`, parsedMessage);
  })
}

const redis = getRedisService();

(async () => listenQueue({
  redis,
}))()
