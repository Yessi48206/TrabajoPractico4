/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código,
 nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.*/

class Producto{
    constructor(codigo,nombre,precio){
        this.codigo=codigo;
        this.nombre=nombre;
        this.precio=precio;

    }
    get MostrarCodigo(){
        return this.codigo;
    }
    get MostrarNombre(){
        return this.nombre;
    }
    get MostrarPrecio(){
        return this.precio;
    }
    //metodo
    imprimirDato(){
        document.write(`<p>Codigo : ${this.codigo}</p>
        <p> Nombre : ${this.nombre}</p>
        <p> Precio : $ ${this.precio}</p>`)
    }
}
let productoNuevo=[];
let arroz= new Producto(150026,"arroz", 120);
let yogur= new Producto(169806,"cosalta frutilla", 180);
let CocaCola= new Producto(196325,"CocaCola 1 L", 200);

productoNuevo.push(arroz);

productoNuevo.push(yogur);
productoNuevo.push(CocaCola);

for(let i=0; i<productoNuevo.length; i++){

    productoNuevo[i].imprimirDato();
    document.write("<hr>");
}
