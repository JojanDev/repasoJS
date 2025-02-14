const validarTarjeta = (tipo, numero) => {
  let regepx
  switch (tipo) {
    case 1:
      regepx = /(^34[0-9]{13})|(^37[0-9]{13})/; 
      const resul = regepx.test(numero);
      return resul;

    default:
      break;
  }
}

let tipo = parseInt(prompt(`-------- TARJETAS DISPONIBLES --------
  1. American Express
  2. Diners Club
  3. Discover
  4. Mastercard
  5. Visa
  
  Ingrese una opcion de tarjeta (1 a 5): `));

let numero = parseInt(prompt("Ingrese el numero de la tarjeta"));

console.log(validarTarjeta(tipo, numero));
