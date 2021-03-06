"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class Saludos {
    constructor(message) {
        this.saludos = message;
    }
    saludo() {
        return "Hello, " + this.saludos;
    }
    getUpperFirst() {
        return _.upperFirst(this.saludos);
    }
}
exports.Saludos = Saludos;
var objSaludo = new Saludos("hola mundo");
//document.body.innerHTML = objSaludo.saludos;
alert(objSaludo.saludos);
