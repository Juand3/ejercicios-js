console.log("***Ejercicio 4***")
//Se crea una funcion que generar las filas y columnas
function generarMatrizAleatoria(filas, columnas) {
    //Se le indica a la funcion que contendra una array
    let matriz = [];
    //Se crea un ciclo for para q cree las filas
    for (let i = 0; i < filas; i++) {
        let fila = [];
        //Se crea un ciclo for para uqe cree las columnas ademas de que aqui se genera el numero aletoriamente
        for (let j = 0; j < columnas; j++) {
            let numeroAleatorio = Math.floor(Math.random() * 10);
            fila.push(numeroAleatorio);
        }
        matriz.push(fila);
    }
    return matriz;
}

//Se una variable que contiene la funcion junto con los argumentos que se le indica para que genera la matriz 3x3
let matrizAleatoria = generarMatrizAleatoria(3, 3);

//ver el resultado final 
console.log(matrizAleatoria);
