/**
 * Server script
 *
 * Listens for messages, and relays to all clients
 *
 */
var net = require('net');
var lanbus = require('lanbus');

lanbus.server.start({
    port: 8124
});