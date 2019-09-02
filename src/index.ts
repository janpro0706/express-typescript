import * as http from 'http';
// import debug from 'debug';
import app from './app';


const port = process.env.PORT || '5000';

const appName = app.get('name') || 'express-typescript';
// const logger: debug.Debugger = debug(appName);

const server = http.createServer(app);

const onError = (err) => {
    console.log(err);
};

const onListening = () => {
    console.log(`${appName} listening on ${port}`);
};

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);