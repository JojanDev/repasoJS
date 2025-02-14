
const sumarArreglo = (arreglo, inicio, fin) => {
  let suma = 0;
  for (let i = inicio - 1; i < fin; i++) {
    suma += arreglo[i];
  }
  return suma;
}

console.log(sumarArreglo([1,2,3,4,5,6,7],1,3));