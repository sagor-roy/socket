import express from 'express'
const app = express();
import http from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://socket.test',
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log('A client connected');

    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

server.listen(3001, () => {
    console.log('SERVER RUN ON 3001 PORT');
})