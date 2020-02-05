import express from 'express';
import http from 'http';
import socketIO from 'socket.io'


const expressServer = express();
const httpServer = http.createServer(serverServer);
const ioServer = socketIO(httpServer)

const port = 80;
const tick = 33.3;

expressServer.use(express.statis('public'));

ioServer.on('connection', socket => {
    console.log(`A new player has connected with id ${socket.id}`);

    socket.on('spawn', () => {
        console.log(`A new player has connected with id ${socket.id} has issued a spawn command`);
        // todo 1: find a base. disconect
        // todo 2: 

        socket.on('command', key => {
            switch (key) {
                case 'w':
                    // TODO
                    break;
                    case 'a':
                    // TODO
                    break;
                    case 's':
                    // TODO
                    break;
                    case 'd':
                    // TODO
                    break;
            }
            console.log(`A player with id ${socket.id} has issued a ${key} command.`);
        });
        socket.on('disconnect', reason => {
            console.log(`The player with id ${socket.id} has disconnect.\n Reason: ${reason}.` );
        
        })
    })
 
});
setInterval(() => {

    ioServer.emit('update', 'todo: replace with real snake data')

}, tick);

httpServer.listen(port, () => console.log(`Snake server is listening on port ${port}.`));
