const validarLongitud = (tipo, numero, errores) => {
  let str = numero.toString().length;
  let mensaje = "";
  switch (tipo) {
    case 1:
      if (str > 15) {
        mensaje = `Excedio el limite de digitos: ${str} digitos`;
      } else if (str < 15) {
        mensaje = `No alcanzo el limite de digitos: ${str} digitos`;
      }
      break;
    
    case 2:
      if (str > 14) {
        mensaje = `Excedio el limite de digitos: ${str} digitos`;
      } else if (str < 14) {
        mensaje = `No alcanzo el limite de digitos: ${str} digitos`;
      }
      break;
    
    case 3,4,5:
      if (str > 16) {
        mensaje = `Excedio el limite de digitos: ${str} digitos`;
      } else if (str < 16) {
        mensaje = `No alcanzo el limite de digitos: ${str} digitos`;
      }
      break;
    default:
      mensaje 
      break;
  }
  if (mensaje != "") {
    return errores.push(mensaje);
  }
}

const validarDato = (numero, errores) => {
  if (/\D/.test(numero)) {
    return errores.push("No puede ingresar caracteres especiales, solo numeros enteros");
  }
}

const validarNomenclatura = (tipo, numero, errores) => {
  let mensaje = "";
  switch (tipo) {
    case 1:
      if (!/^34|^37/.test(numero)) {
        mensaje = `Nomenclatura incorrecta.`;
      }
      break;
    case 2:
      if (!/^300|^305|^36|^38/.test(numero)) {
        mensaje = `Nomenclatura incorrecta.`;
      }
      break;
    case 3:
      if (!/^6011/.test(numero)) {
        mensaje = `Nomenclatura incorrecta.`;
      }
      break;
    case 4:
      if (!/^51|^55/.test(numero)) {
        mensaje = `Nomenclatura incorrecta.`;
      }
      break;
    case 5:
      if (!/^4/.test(numero)) {
        mensaje = `Nomenclatura incorrecta.`;
      }
      break;
  
    default:
      break;
  }
  if (mensaje != "") {
    return errores.push(mensaje);
  }
  return mensaje;
}


// console.log(validarTarjeta(tipo, numero));

const pedirTarjeta = () => {
  let tipo;
  do {
    tipo = parseInt(prompt(`-------- TARJETAS DISPONIBLES --------
      1. American Express
      2. Diners Club
      3. Discover
      4. Mastercard
      5. Visa
      
      Ingrese una opcion de tarjeta (1 a 5): `));
  } while (tipo > 5 ||  tipo < 1 || !tipo);
    
  do {
    let numero = parseInt(prompt("Ingrese el numero de la tarjeta."));
    
    if (errores != []) {
      
    }
    errores.push(validarLongitud(tipo, numero, errores));
    errores.push(validarDato(numero, errores));
    errores.push(validarNomenclatura(tipo, numero, errores));

    if (errores != []) {
      alert(errores.join("\n"));
    }
    
  } while (errores != "");
  alert("Tarjeta ingresada correctamente");
}

pedirTarjeta();