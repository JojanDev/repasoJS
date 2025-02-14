const fizzBuzz = (numero) => {
  if (numero % 15 == 0) {
    return "fizzbuzz";
  }else if (numero % 3 == 0) {
    return "fizz";
  }else if (numero % 5 == 0) {
    return "buzz";
  } else {
    return numero;
  }
}

let numero = parseInt(prompt("Ingrese el numero: "));

const resultado = fizzBuzz(numero);

console.log(resultado);
