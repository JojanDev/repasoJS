const transcribir = string => {
  let arn = string.split('');

  for (let i = 0; i < arn.length; i++) {
    switch (arn[i]) {
      case "G":
        arn.splice(i, 1, "C");
        break;
      case "C":
        arn.splice(i, 1, "G");
        break;
      case "T":
        arn.splice(i, 1, "A");
        break;
      case "A":
        arn.splice(i, 1, "U");
        break;
      default:
        break;
    }
  }
  return arn;
}

let arn = transcribir("GCTA");

console.log(arn);
