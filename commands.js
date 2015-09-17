/**
 * Command definitions
 */

var exec = require('child_process').exec;

module.exports = {
    // Speak message using libpicotts
    speak: function(message) {
        var cmd = 'pico2wave --wave speech.wav "' + message + '"; mplayer speech.wav; rm speech.wav';
        exec(cmd, function (error, stdout, stderr) {
            //console.log(stdout);
        });
    }
};