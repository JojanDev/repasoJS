const capitalizar = (string) => {
  let capitalizado = string.replace(/^[a-zA-z]/, string[0].toUpperCase());
  return capitalizado;
};

const capitalizarTexto = (string) => {
  let array = string.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    let palabra = array[i];
    array[i] = capitalizar(palabra);
  }
  return array.join(" ");
};

console.log(capitalizarTexto("v o l e i b o l"));
