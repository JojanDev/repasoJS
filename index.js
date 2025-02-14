const piramide = (altura) => {
  for (let i = 1; i <= altura; i++) {
    let asteriscos = "";
    for (let a = 1; a <= altura - i; a++) {
      asteriscos += " ";
    }
    for (let z = 1; z < i*2; z++) {
      asteriscos += "*";
    }
    console.log(asteriscos);
  }
}

const altura = parseInt(prompt("Ingrese la altura de la piramide: "));
piramide(altura);


