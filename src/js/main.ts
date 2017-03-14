import * as _ from "lodash";

 export class Saludos{
  saludos:string;
  constructor(message: string) {
          this.saludos = message;
      }
      saludo() {
          return "Hello, " + this.saludos;
      }
      getUpperFirst(){
        return _.upperFirst(this.saludos);
      }

}

var objSaludo = new Saludos("hola mundo");

//document.body.innerHTML = objSaludo.saludos;
alert(objSaludo.saludos);
