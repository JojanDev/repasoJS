//Importamos funciones especificas desde el archivo index.js
import {
  getUsuarios,
  getPosts,
  getComments,
  getPhotos,
  getAlbums,
} from "./modulos/index.js";

//Variable constante que contiene la url de los datos
const URL = "https://jsonplaceholder.typicode.com";

//Variable almacena el id de un usuario
const usuarioId = 3;

//Funcion para obtener datos de un usuario
const getUsuarioID = async (usuarioId) => {
  //Obtenemos los datos del usuario
  let usuario = await getUsuarios(URL, usuarioId);
  //Obtenemos los post del usuario
  let post = await getPosts(URL, usuario[0]);
};

// getUsuarioID(usuarioId);

//Funcion para agregar una propiedad y valor a un objeto, "obtenerValor" representa una funciona que extrae datos
const agregarPropiedad = async (arrayObjetos, propiedad, obtenerValor) => {
  //Retonamos el arreglo de objetos modificado
  return Promise.all(
    //Recorremos el arreglo de objetos
    arrayObjetos.map(async (objeto) => {
      //Obtenemos los datos que representan el valor de la propiedad
      const valor = await obtenerValor(URL, objeto.id);
      //Retornamos una copia del objeto original agregandole la propiedad y su valor
      return { ...objeto, [propiedad]: valor };
    })
  );
};

//Funcion para obtener el usuario con sus post, comentarios, albums, fotos
const obtenerEstructuraUsuarios = async () => {
  //Obtenemos usuarios
  const usuarios = await getUsuarios(URL);
  //Devuelve un arreglo con la copia de los objetos modificados
  return await Promise.all(
    //Recorre el arreglo
    usuarios.map(async (usuario) => {
      //Obtenemos los posts del usuario
      const posts = await getPosts(URL, usuario.id);
      //Obtenemos el arreglo de los posts con los comentarios
      const commentPost = await agregarPropiedad(
        posts,
        "comments",
        getComments
      );
      //Obtenemos los albumes del usuario
      const albums = await getAlbums(URL, usuario.id);
      //Obtenemos el arreglo de los albumes con sus fotos
      const photosAlbums = await agregarPropiedad(albums, "photos", getPhotos);
      //Retornamos una copia del objeto original agregandole las propiedades y sus valores
      return { ...usuario, posts: commentPost, albums: photosAlbums };
    })
  );
};

//Se llama a la funcion y se muestra el resultado
obtenerEstructuraUsuarios().then((data) => {
  console.log(data);
});
