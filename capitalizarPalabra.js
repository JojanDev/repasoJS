const capitalizar = string => {
  let capitalizado = string.replace(/^[a-zA-z]/, string[0].toUpperCase()); 
  return capitalizado;
}

console.log(capitalizar("hola"));
