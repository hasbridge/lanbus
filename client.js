/**
 * Client code
 *
 * Listens for messages, and speaks when a message is received
 */
var net = require('net');
var lanbus = require('lanbus');
var commands = require('./commands.js');

lanbus.client.start(commands);