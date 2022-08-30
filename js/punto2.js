/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y
 volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta
{   
    constructor(titular)
    {
    this.titular=titular;
    this.saldo=0;
    this.cbu=1256387922224;
    }

    //metodos
    ingresar (cantidad)
    {
        this.saldo = this.saldo + cantidad;
        //document.write(`<p>Ingreso ${cantidad}</p>`);
    };

    extraerDinero(extraer)
    {
        if(this.saldo>= extraer){
          this.saldo = this.saldo - extraer;
          alert("Se realizo la extraccion");
        }else{
           alert("no tiene dinero suficiente en su cuenta");
        }
    }

    consultaSaldo()
    {
        alert(`Saldo : ${this.saldo}`);
    }
    consultaCBU()
    {
       alert(`CBU : ${this.cbu}`);
    }
    estado()
    {
        alert(`Titular : ${this.titular} 
             CBU : ${this.cbu} 
             saldo : ${this.saldo}`)
        
    }

}
let cuentaa=new Cuenta("Alex");
console.log("ya esta");
do {
let opcion=prompt(`     Ingrese una opcion:
             
                        1.Ingresar dinero
                        2.Extraer dinero
                        3.Consultar saldo
                        4.Consultar CBU
                        5.Estado`);

 switch (parseInt(opcion)){

    case 1:
        //ingresar dinero
        let cantidad=parseInt( prompt("cuanto quiere ingresar"));
        cuentaa.ingresar(cantidad);
        
    break;
    case 2:
        //extraer dinero
        let extraer= parseInt(prompt("ingrese la cantidad a extraer"));
        cuentaa.extraerDinero(extraer);
    break;
    case 3:
        cuentaa.consultaSaldo();
        break;
    case 4:
        cuentaa.consultaCBU();
        break;
    case 5:
    cuentaa.estado();
    break;

    default :
    document.write("Ingresaste una opcion invalida");

 }
} while (confirm("quiere realizar otra operacion?"));