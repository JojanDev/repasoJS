const validarLongitud = (tipo, numero, errores) => {
  let str = numero.length;
  let mensaje = "";
  switch (tipo) {
    case 1:
      if (str > 15) {
        mensaje = `Excedio el limite de digitos: limite = 15 - ingreso: ${str} digitos`;
      } else if (str < 15) {
        mensaje = `No alcanzo el limite de digitos: limite = 15 - ingreso: ${str} digitos`;
      }
      break;

    case 2:
      if (str > 14) {
        mensaje = `Excedio el limite de digitos: limite = 14 - ingreso: ${str} digitos`;
      } else if (str < 14) {
        mensaje = `No alcanzo el limite de digitos: limite = 14 - ingreso: ${str} digitos`;
      }
      break;
    default:
      if (str > 16) {
        mensaje = `Excedio el limite de digitos: limite = 16 - ingreso: ${str} digitos`;
      } else if (str < 16) {
        mensaje = `No alcanzo el limite de digitos: limite = 16 - ingreso: ${str} digitos`;
      }
      break;
  }
  if (mensaje != "") {
    errores.push(mensaje);
  }
  return errores;
};

const validarDato = (numero, errores) => {
  if (/\D/.test(numero)) {
    errores.push(
      "No puede ingresar caracteres especiales, solo numeros enteros"
    );
  }
  return errores;
};

const validarNomenclatura = (tipo, numero, errores) => {
  let mensaje = "";
  switch (tipo) {
    case 1:
      if (!/^(3[4-7])/.test(numero)) {
        mensaje = `Ingreso una nomenclatura incorrecta.`;
      }
      break;
    case 2:
      if (!/^(30[0-5])|(3[6-8])/.test(numero)) {
        mensaje = `Ingreso una nomenclatura incorrecta.`;
      }
      break;
    case 3:
      if (!/^6011/.test(numero)) {
        mensaje = `Ingreso una nomenclatura incorrecta.`;
      }
      break;
    case 4:
      if (!/^5[1-5]/.test(numero)) {
        mensaje = `Ingreso una nomenclatura incorrecta.`;
      }
      break;
    case 5:
      if (!/^4/.test(numero)) {
        mensaje = `Ingreso una nomenclatura incorrecta.`;
      }
      break;

    default:
      break;
  }
  if (mensaje != "") {
    errores.push(mensaje);
  }
  return errores;
};

// console.log(validarTarjeta(tipo, numero));

const pedirTarjeta = () => {
  let tipo;
  do {
    tipo = parseInt(
      prompt(`-------- TARJETAS DISPONIBLES --------
      1. American Express
      2. Diners Club
      3. Discover
      4. Mastercard
      5. Visa
      
      Ingrese una opcion de tarjeta (1 a 5): `)
    );
  } while (tipo > 5 || tipo < 1 || !tipo);
  let errores;
  do {
    errores = [];
    let numero = prompt("Ingrese el numero de la tarjeta.");

    errores = validarLongitud(tipo, numero, errores);
    errores = validarDato(numero, errores);
    errores = validarNomenclatura(tipo, numero, errores);

    if (errores != "") {
      alert(`ERRORES:\n- ${errores.join("\n- ")}`);
    }
  } while (errores != "");
  alert("Tarjeta ingresada correctamente");
};

pedirTarjeta();
// let errores = [];
// console.log(errores == "");

// console.log(/\D/.test(123123));
