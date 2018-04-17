import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];
let source = Observable.from(number); 
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


source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);