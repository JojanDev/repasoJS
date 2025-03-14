import solicitud from "./solicitud.js";

//Funcion que retorna el arreglo con los comentarios de un post
export const getComments = async (URL, postID) =>
  await solicitud(`${URL}/comments?postId=${postID}`);
