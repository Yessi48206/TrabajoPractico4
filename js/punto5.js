/*5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y
 cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:*/
/*esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.*/

class Persona{

    constructor(nombre, edad, DNI, sexo,peso,altura,añoNacimiento){
        this.nombre=nombre;
        this.edad=edad;
        this.DNI=DNI;
        this.sexo=sexo;
        this.peso=peso;
        this.altura=altura;
        this.añoNacimiento=añoNacimiento;
    }
   

    mostarGeneracion(){
        if(this.añoNacimiento>=1994 && this.añoNacimiento<=2010){
            document.write(`<h3>GENERACION Z PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 7.800.000</p>");
            document.write("<p>Circunstancia Historica : Expansion masiva de internet</p>");
            document.write("<p>Rasgo Caracteristico : Irreverencia</p>");
        }
        if(this.añoNacimiento>=1981 && this.añoNacimiento<=1993){
            document.write(`<h3>GENERACION Y PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 7.200.000</p>");
            document.write("<p>Circunstancia Historica : Inicio de la digilitacion</p>");
            document.write("<p>Rasgo Caracteristico : Frustracion</p>");
        }
        if(this.añoNacimiento>=1969 && this.añoNacimiento<=1920){
            document.write(`<h3>GENERACION X PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 9.300.000</p>");
            document.write("<p>Circunstancia Historica : Crisis del 73 y transicion española</p>");
            document.write("<p>Rasgo Caracteristico : Obsesion por el exito</p>");
        }
        if(this.añoNacimiento>=1949 && this.añoNacimiento<=1968){
            document.write(`<h3>GENERACION Baby Boom PERTENECE ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 12.200.000</p>");
            document.write("<p>Circunstancia Historica : Paz y expancion demografica</p>");
            document.write("<p>Rasgo Caracteristico : Ambicion</p>");
        }
        if(this.añoNacimiento>=1930 && this.añoNacimiento<=1948){
            document.write(`<h3>Generacion los niños de la posguerra pertenece ${this.nombre} </h3>`);
            document.write("<p>Poblacion de la generacion : 6.300.000</p>");
            document.write("<p>Circunstancia Historica : Conflicto belicos</p>");
            document.write("<p>Rasgo Caracteristico : Austeridad </p>");
        }

    }
    MayorEdad()
    {
    let mayor=this.añoNacimiento-2010;
    console.log(mayor);
    if(mayor>=18){

        document.write(`${this.nombre} es mayor de edad `);
    }else 
    { 
        document.write(`${this.nombre} es menor de edad `);
    }
    }
    MostraDato()
    {
        document.write(`<p>Nombre : ${this.nombre} </p>`);
       
        document.write(`<p>Edad : ${this.edad} </p>`);
        document.write(`<p>DNI : ${ this.DNI} </p>`);
        document.write(`<p>Sexo : ${this.sexo} </p>`);
        document.write(`<p>Peso : ${this.peso} </p>`);
        document.write(`<p>Altura : ${this.altura} </p>`);
        document.write(`<p>Año de nacimiento : ${this.añoNacimiento} </p>`);
    }

}

let PersonaNuevo = new Persona("Yessica", 20, 4256315, "Femenimo",58,156,1933);

PersonaNuevo.mostarGeneracion();
document.write("<hr>");
PersonaNuevo.MayorEdad();
document.write("<hr>");

PersonaNuevo.MostraDato();
