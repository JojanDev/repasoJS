import solicitud from "./solicitud.js";

//Funcion para obtener los usuarios
export const getUsuarios = async (URL, id) => {
  //Almacenamos la ruta dependiendo si la variable "id" esta definida o no
  let ruta = id ? `${URL}/users?id=${id}` : `${URL}/users`;
  //Obtenemos los usuarios
  const usuarios = await solicitud(ruta);
  //Retornamos los usuarios
  return usuarios;
};
