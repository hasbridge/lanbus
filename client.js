/**
 * Client code
 *
 */
var config = require('config');
var lanbus = require('lanbus');
var exec = require('child_process').exec;

lanbus.client.start(config.get('client'));

// Example event handler
lanbus.client.attach('speak', function(params) {
    var cmd = 'pico2wave --wave speech.wav "' + params.text + '"; mplayer speech.wav; rm speech.wav';
    exec(cmd);
});