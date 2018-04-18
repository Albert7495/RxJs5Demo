"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var number = [1, 5, 10];
var source = rxjs_1.Observable.from(number);
/*
class MyObservable implements Observer<number> {
  //  closed?: boolean;
 /*   next(value: number){ //ocurrrio bien el evento se ejecuta

        console.log(`ValueOK: ${value}`);
     };
    error (err: any) {  //ocurrio el evento, pero un error en el evento
       
        console.log(`Error: ${err}`);
    };
    complete() {
        
        console.log(`Complete:`);

    };
}

source.subscribe(new MyObservable);
*/
source.subscribe(function (value) {
    console.log("value: " + value);
}, function (error) {
    console.log("Error: " + error);
}, function () {
    console.log('Complete');
});
//# sourceMappingURL=mainNchido.1.js.map