const contraseñaValida = string => string === "2F(jjbFsuj" || string === "eoZiugBd&g9" ? true : false;

let contraseña = prompt("Ingrese la contraseña: ");

console.log(contraseñaValida(contraseña));
