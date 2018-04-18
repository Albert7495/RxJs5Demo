"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var number = [1, 5, 10];
var source = rxjs_1.Observable.create(function (observer) {
    number.forEach(function (element) {
        if (element === 10) {
            observer.error("Oops");
        }
        observer.next(element);
    });
    observer.complete();
});
source.subscribe(function (value) {
    console.log("value: " + value);
}, function (error) {
    console.log("Error: " + error);
}, function () {
    console.log('Complete');
});
//# sourceMappingURL=mainIf.js.map