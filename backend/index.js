const express =  require('express');

const serviceRouter = require('./routers/serviceRouter');

const app = express();

app.use(express.json());

//Paths to routers:

app.use('/services', serviceRouter);

module.exports = app;