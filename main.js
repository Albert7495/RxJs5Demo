"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var output = document.getElementById("output");
var button = document.getElementById("button");
var button = document.getElementById("mostrar");

var click = rxjs_1.Observable.fromEvent(button, "click");
function load(url) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', function () {
        var jsonStarWars = JSON.parse(xhr.responseText);
        jsonStarWars.forEach(function (element) {
            var div = document.createElement('div');
            div.innerText = element.name;
            output.appendChild(div);
        });
    });
    xhr.open('GET', url);
    xhr.send();
}
click.subscribe(function (value) {
    load('starwars.json');
}, function (error) {
    console.log("Error: " + error);
}, function () {
    console.log('Complete');
});
//# sourceMappingURL=main.js.map