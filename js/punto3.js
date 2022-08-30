/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto 
y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class rectangulo{
    constructor(alto, ancho){
        this.alto=alto;
        this.ancho=ancho;
        
    }
    set cambiarAltura(nuevaAltura){
        this.alto=nuevaAltura;
    }
    set cambiarancho(nuevaAncho){
        this.ancho=nuevaAncho;
    }
    get ancho1(){
        return this.ancho;
    }
    get alto1(){
        return this.alto;
    }
    get area(){
        return this.ancho*this.alto;
    }
    get perimetro(){
        return ((2 * this.alto)+(2*this.alto));
    }

    //metodo
    Propiedad(){
        document.write(`<p>El perimetro del rectangulo es : ${this.perimetro} </p>`);
        document.write(`<p> El area del rectangulo es : ${this.area} </p>`)
    }

}
document.write("<h3> Primer rectangulo </h3>");
let rectangulo1= new rectangulo(50,20);
document.write(`<p> El ancho : ${rectangulo1.ancho1} </p>`);
document.write(`<p> El Alto : ${rectangulo1.alto1} </p>`);
rectangulo1.Propiedad();
document.write("<h3>Cambio de valor de el ancho y alto</h3>");
rectangulo1.cambiarAltura=10;
rectangulo1.cambiarancho=5;

document.write(`<p> El ancho : ${rectangulo1.ancho1} </p>`);
document.write(`<p> El Alto : ${rectangulo1.alto1} </p>`);
rectangulo1.Propiedad();