var http = require('http');

var EventEmittter = require('events').EventEmitter;
var event = new EventEmittter();
event.on('some_event',function () {
    console.log('事件被触发了');
});
setTimeout(function () {
    event.emit('some_event');
},1000);