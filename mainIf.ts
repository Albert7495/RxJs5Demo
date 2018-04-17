import { Observable, Observer } from "rxjs";

let number = [1, 5, 10];


let source = Observable.create((observer)=>{
    number.forEach(element =>{

       
     
          if(element===10){
            observer.error("Oops");
        }
        observer.next(element);
    });

    observer.complete();
});


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