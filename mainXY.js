"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var source = rxjs_1.Observable.fromEvent(document, 'mousemove')
    .map(function (event) {
    return {
        x: event.clientX,
        y: event.clientY
    };
}).filter(function (element) {
    return element.x > 500;
});
source.subscribe(function (value) {
    console.log("valueX: " + value.x + " valueY: " + value.y);
}, function (error) {
    console.log("Error: " + error);
}, function () {
    console.log('Complete');
});
//# sourceMappingURL=mainXY.js.map