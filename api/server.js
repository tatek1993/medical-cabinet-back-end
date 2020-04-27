const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// const authRouter = require('../auth/authRouter.js');
// const usersRouter = require('../users/usersRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use('/api/auth', authRouter);
// server.use('/api/user', usersRouter);

server.get('/', (req, res) => {
    res.send("Hi there! If you are seeing this it means the server is up! Woohoo!")
});

module.exports = server;