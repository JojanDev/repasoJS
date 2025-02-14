const multiplicarArreglo = (array) => {
  let resultado = 1;
  array.forEach(element => {
    resultado *= element;
  });
  return resultado;
}

console.log(multiplicarArreglo([1,2,3,4,5,6,7,8,9]));
