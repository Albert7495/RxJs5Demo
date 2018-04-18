import { Observable, Observer } from "rxjs";
import { elementAt } from "rxjs/operator/elementAt";

let output = document.getElementById("output");
let button = document.getElementById("button");
let click=Observable.fromEvent(button,"click"); //genera un evento al partir del click del boton

function load(url: string){

    return Observable.create(observer =>{

        let xhr =new XMLHttpRequest();

        xhr.addEventListener('load',()=>{ 
            
            if(xhr.status===200){ //status de error
                let jsonStarWars=  JSON.parse(xhr.responseText);
                observer.next(jsonStarWars);
                observer.complete();
            }else{
                observer.error(xhr.statusText); // status text -> el texto del motivo de error
            }
            
        });
        xhr.open('GET',url);
        xhr.send();

    });
}

function renderStarWars(jsonStarWars){
    
    jsonStarWars.forEach(element => {
        let div = document.createElement('div');
        div.innerText= `${element.category} - ${element.name} `;
        output.appendChild(div);
    });
}

 /* click.flatMap(z=> load('starwars.json')).subscribe(value => {
        renderStarWars(value);
  },
        error=>{
        console.log(`Error: ${error}`)
        });
*/ //reduccion del subscribe de, flatmap -> encadena 2 observable 


click.subscribe(
    value => {
        load('starwars.json')
            .subscribe(value => {
                                  renderStarWars(value);
                                },
                       error=>{
                           console.log(`Error: ${error}`)
                             });
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);