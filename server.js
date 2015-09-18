/**
 * Server script
 *
 * Listens for messages, and relays to all clients
 *
 */
var config = require('config');
var lanbus = require('lanbus');

lanbus.server.start(config.get('server'));