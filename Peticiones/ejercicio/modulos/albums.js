//Importamos una funcion
import solicitud from "./solicitud.js";

//Funcion que devuelve un arreglo con los albumes de un usuario
export const getAlbums = async (URL, userId) =>
  await solicitud(`${URL}/albums?userId=${userId}`);
