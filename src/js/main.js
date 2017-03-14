"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var Saludos = (function () {
    function Saludos(message) {
        this.saludos = message;
    }
    Saludos.prototype.saludo = function () {
        return "Hello, " + this.saludos;
    };
    Saludos.prototype.getUpperFirst = function () {
        return _.upperFirst(this.saludos);
    };
    return Saludos;
}());
exports.Saludos = Saludos;
var objSaludo = new Saludos("hola mundo");
alert(objSaludo.saludos);
