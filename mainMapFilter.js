"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var number = [1, 5, 10];
var source = rxjs_1.Observable.create(function (observer) {
    var index = 0;
    var produceValue = function () {
        observer.next(number[index++]);
        if (index < number.length) {
            setTimeout(function () {
                produceValue();
            }, 2000);
        }
        else {
            observer.complete();
        }
    };
    produceValue();
}).map(function (x) { return x * 3; })
    .filter(function (x) { return x >= 10; });
source.subscribe(function (value) {
    console.log("value: " + value);
}, function (error) {
    console.log("Error: " + error);
}, function () {
    console.log('Complete');
});
//# sourceMappingURL=mainMapFilter.js.map