"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var numbers = [1, 5, 10];
var source = rxjs_1.Observable.create(function (observer) {
    numbers.forEach(function (element) {
        if (element === 5) {
            observer.error('Algo salio mal');
        }
        observer.next(element);
    });
    observer.complete();
});
source.subscribe(function (value) { return console.log("value: " + value); }, function (error) { return console.log("error: " + error); }, function () { return console.log('Complete'); });
//# sourceMappingURL=main2.js.map