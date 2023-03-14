const redis = require('redis');

require('dotenv').config();

exports.redisClient = redis.createClient({
    legacyMode: true,
    password: process.env.REDIS_AUTH
});
