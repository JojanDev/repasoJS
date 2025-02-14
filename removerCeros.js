const removerCeros = array => {
  array.forEach(element => {
    array.splice(array.indexOf(element), element === 0 ? 1 : 0);
  });
  return array;
}


let resultado = removerCeros([1, 0, 2, 1, 0, 26]);

console.log(resultado);
