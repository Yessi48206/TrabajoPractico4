/*6- Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro()
 para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro{

    constructor(ISBM, Titulo, Autor, NumeroPaginas){
        this.ISBM=ISBM;
        this.Titulo=Titulo;
        this.Autor=Autor;
        this.NumeroPaginas=NumeroPaginas;
    }
    get mostrarISBM() {
        return this.ISBM;
      }
    
      get mostrartitulo() {
        return this.Titulo;
      }
    
      get mostrarAutor() {
        return this.Autor;
      }
      get mostrarNumeropaginas(){
        return this.NumeroPaginas;
      }

      set cambiarAutor(nuevoAutho){
        this.Autor=nuevoAutho;
      }
      set cambiarTitulo(nuevoTitulo){
        this.Autor=nuevoTitulo;
      }

      mostrarLibro(){
        document.write(`<h3>El libro ${this.Titulo} con ISBN ${this.ISBM} creado por el autor ${this.Autor} tiene páginas ${this.NumeroPaginas} </h3>`)
      }
}

let NuevoLibro= new Libro(3256,"El principito","nose",70);

NuevoLibro.mostrarLibro();

let segundoLibro= new Libro(5866,"Marie curie","luisa vera",72);
segundoLibro.mostrarLibro();

if(segundoLibro.mostrarNumeropaginas> NuevoLibro.mostrarNumeropaginas){

    document.write(`El libro de ${segundoLibro.mostrartitulo} es el que tiene mas pagina`);

}else if(segundoLibro.mostrarNumeropaginas< NuevoLibro.mostrarNumeropaginas){
    document.write(`El libro de ${NuevoLibro.mostrartitulo} es el que tiene mas pagina`);
}else{
    document.write(`Los dos libro tiene la misma cantidad de pagina`);
}

