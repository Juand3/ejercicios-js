console.log("***Ejercicio 3***")
//Se crea la Clase Libro con sus parametros
class Libro {
    constructor(titulo,genero, autor, añoDePublicacion,paginas) {
       this.titulo = titulo;
       this.autor = autor;
       this.añoDePublicacion = añoDePublicacion;
       this.paginas=paginas
       this.genero=genero
    }

   //Se crea el metodo Informacion para mostrar los parametros de la clase Libro
    detalles() {
       return `Título: ${this.titulo},genero:${this.genero} ,Autor: ${this.autor}, Año de Publicación: ${this.añoDePublicacion},Paginas:${this.paginas}`;
    }
   }

   //Se se crea una variable que agregague los datos dentro de la clase y se muestran en consola   
   const MiLibro = new Libro('La piedra filosofal','Alta fantasia', 'J. K. Rowling', 1997,264);
   //ver el resultado final
   console.log(MiLibro.detalles());
   