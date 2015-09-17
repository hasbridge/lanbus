/**
 * Speak script
 *
 * Connects to server, broadcasts message to all clients
 */
var net = require('net');

var command = process.argv[2];

var opts = {
    host: '127.0.0.1',
    port: 8124
};

var client = new net.Socket();
client.connect(opts.port, opts.host, function () {
    client.write(command);
    client.end();
});