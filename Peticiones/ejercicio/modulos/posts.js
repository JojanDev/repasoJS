import solicitud from "./solicitud.js";

//Funcion que devuelve un arreglo con los post de un usuario
export const getPosts = async (URL, usuarioID) =>
  await solicitud(`${URL}/posts?userId=${usuarioID}`);
