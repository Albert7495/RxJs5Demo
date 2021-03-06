import { Observable, Observer } from "rxjs";
import { elementAt } from "rxjs/operator/elementAt";

let output = document.getElementById("output");
let button = document.getElementById("button");
let buttonM = document.getElementById("mostrar");

let click=Observable.fromEvent(buttonM,"click"); //genera un evento al partir del click del boton



function load(url: string){
  
    return Observable.create(observer =>{
        
        let xhr =new XMLHttpRequest();

        xhr.addEventListener('load',()=>{ 
            
            if(xhr.status===200){ //status de error
                let jsonCalificaciones=  JSON.parse(xhr.responseText);
                observer.next(jsonCalificaciones);
                observer.complete();
            }else{
                observer.error(xhr.statusText); // status text -> el texto del motivo de error
            }
            
        });
        xhr.open('GET',url);
        xhr.send();

    });
}

function renderCalificaciones(jsonCalificaciones){ 
    jsonCalificaciones.forEach(element => {
        let div = document.createElement('div');
        div.innerText= `${element.name} `;
        output.appendChild(div);
    });
}

 /* click.flatMap(z=> load('starwars.json')).subscribe(value => {
        renderCalificaciones(value);
  },
        error=>{
        console.log(`Error: ${error}`)
        });
 //reduccion del subscribe de, flatmap -> encadena 2 observable 
*/


click.subscribe(
    
    value => {
        load('calificaciones.json')
            .subscribe(x=>Observable.from(x).filter((x:any)=>x.cal>60).subscribe(x=>console.log(x.name)));
          
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);

click.subscribe(
    
    value => {
        load('calificaciones.json')
            .subscribe(x=>Observable.from(x).max(x.cal).subscribe(x=>console.log(x)));
          
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);