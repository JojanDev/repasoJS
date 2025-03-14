import solicitud from "./solicitud.js";

//Funcion que devuelve un arreglo con las fotos de un album
export const getPhotos = async (URL, albumID) =>
  await solicitud(`${URL}/albums?userId=${albumID}`);
