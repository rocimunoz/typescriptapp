//import * as _ from "lodash";
var Saludos = (function () {
    function Saludos(message) {
        this.saludos = message;
    }
    Saludos.prototype.saludo = function () {
        return "Hello, " + this.saludos;
    };
    return Saludos;
}());
var objSaludo = new Saludos("Hello, world!");
//document.body.innerHTML = objSaludo.saludos;
alert(objSaludo.saludos);
