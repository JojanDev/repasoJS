const calcularImpuestos = (edad, ingresos) => {
  if (edad >= 18) {
    if (ingresos >= 1000) {
      return ingresos * 0.4;
    }
    return 0;
  }
  return "Menor de edad";
}

let edad = parseInt(prompt("Ingrese su edad: "));
let ingresos = parseFloat(prompt("Ingrese los ingresos"));

let resultado = calcularImpuestos(edad, ingresos);

console.log(resultado);
