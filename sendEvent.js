/**
 * Example event emitter
 */
var config = require('config');
var lanbus = require('lanbus');

var event = process.argv[2];

var params = '';
for (var i = 3; i < process.argv.length; i++) {
        params += process.argv[i] + ' ';
}
params = params.trim();

lanbus.client.start(config.get('client'), function(){
    lanbus.client
            .emit(event, {text: params})
            .end();
});
