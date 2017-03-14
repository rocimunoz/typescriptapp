//import * as _ from "lodash";

 class Saludos{
  saludos:string;
  constructor(message: string) {
          this.saludos = message;
      }
      saludo() {
          return "Hello, " + this.saludos;
      }

}

var objSaludo = new Saludos("Hello, world!");
//document.body.innerHTML = objSaludo.saludos;
alert(objSaludo.saludos);
