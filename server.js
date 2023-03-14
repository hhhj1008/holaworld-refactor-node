const { createApp } = require('./app');

require('dotenv').config();

const SERVER_PORT = process.env.SERVER_PORT;

const app = createApp();
app.listen(SERVER_PORT, () => {
    console.log(`server start : http://localhost:${SERVER_PORT}/`);
})