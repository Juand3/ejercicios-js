// Se crea una variable  a la cual le vamos a pasar el numero a calcular 
let numeroFactorial = 5; 

//Se crea funcion la cual contiene un ciclo for el cual itera la multiplicacion para realizar el calculo factorial
function calcularFactorial(numeroFactorial) {
    let resultado = 1;
    for (let i = 1; i <= numeroFactorial; i++) {
        resultado *= i;
    }
    return resultado;
}

//Se crea una variable que haga el llamado a la funcion con el valor que contiene la variable
let factorial = calcularFactorial(numeroFactorial);

//Se muestra con un console.log el numero y el resultado
console.log("***Ejercicio 1***")
console.log(`El calculo factorial del ${numeroFactorial}! es igual a ${factorial}`);

