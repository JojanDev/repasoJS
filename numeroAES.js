const numeroDeAes = string =>
  string.match(/a/g) != null ? string.match(/a/g).length : 0;

console.log(numeroDeAes("Mi ma me mim"));

