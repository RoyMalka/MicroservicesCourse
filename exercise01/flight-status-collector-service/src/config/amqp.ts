export  default amqp     = {
    name: 'rabbitmq',
    hostname: process.env.AMQP_HOST,
    port: process.env.AMQP_PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
} 