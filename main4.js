"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var output = document.getElementById('output');
var button = document.getElementById('button');
var unsuscribe = document.getElementById('unsuscribe');
var click = rxjs_1.Observable.fromEvent(button, 'click');
var clickUnsuscribe = rxjs_1.Observable.fromEvent(unsuscribe, 'click');
function add() {
    var div = document.createElement('div');
    div.innerText = 'Prueba';
    output.appendChild(div);
}
var clickSubs = click.subscribe(function (event) { return add(); }, function (error) { return console.log("Error: " + error); }, function () { return console.log('Complete'); });
clickUnsuscribe.subscribe(function () {
    clickSubs.unsubscribe();
});
//# sourceMappingURL=main4.js.map