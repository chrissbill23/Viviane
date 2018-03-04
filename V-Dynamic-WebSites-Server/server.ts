import {app} from "./app";
const port = normalizePort(process.env.PORT || '3002');
app.set('port', port);

const server = app.listen(port, () => {
    console.info("Listening on port " + port);
});
server.on('error', onError);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    const port2 = parseInt(val, 10);

    if (isNaN(port2)) {
        // named pipe
        return val;
    }

    if (port2 >= 0) {
        // port number
        return port2;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
