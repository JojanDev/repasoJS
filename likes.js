let numero = parseInt(prompt("Ingrese el numero: "));

const likes = (numero) => {
  if (numero < 1000) {
    console.log(`${numero}`);
  }else if (numero < 1000000) {
    console.log(`${Math.round(numero / 1000).toFixed(0)}K`);
  }else {
    console.log(`${Math.round(numero / 1000000).toFixed(0)}M`);
  }
}

likes(numero);