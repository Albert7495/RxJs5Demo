import { Observable, Observer } from "rxjs";
import { elementAt } from "rxjs/operator/elementAt";

let output = document.getElementById("output");
let button = document.getElementById("button");
let click=Observable.fromEvent(button,"click");

function load(url: string){
    let xhr =new XMLHttpRequest();

    xhr.addEventListener('load',()=>{
      
      // console.log(xhr.responseText);
        let jsonStarWars=  JSON.parse(xhr.responseText);
    
      jsonStarWars.forEach(element => {
            let div = document.createElement('div');
            div.innerText= `${element.category} - ${element.name} `;
          //  div.innerText=element.name;
            output.appendChild(div);
        });

    });
    xhr.open('GET',url);
    xhr.send();
}

click.subscribe(
    value => {
        load('starwars.json');
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);