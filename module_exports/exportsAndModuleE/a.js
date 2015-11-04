/**
 * Created by SQB on 2015/10/29.
 */
var EventEmitter = require('events');

module.exports = new EventEmitter();

setTimeout(function(){
    module.exports.emit('ready');
    console.log(module.exports);
},3000);
