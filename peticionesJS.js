const extraerDatos = async (url) => {
  let datos = await fetch(url);
  return await datos.json();
};

const obtenerUsuarios = async () => {
  return extraerDatos("https://jsonplaceholder.typicode.com/users");
};

const obtenerPost = async (userId) => {
  return await extraerDatos(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
};

const obtenerComentarios = async (postId) => {
  return await extraerDatos(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  );
};

const agruparDatos = async () => {
  //Obtenemos la lista de los usuarios
  let usuarios = await obtenerUsuarios();

  let postUsuarios = await Promise.all(
    //Recorremos los usuarios con el metodo "map" y devolvemos un nuevo array con los datos procesados
    usuarios.map(async (user) => {
      //Obtenemos los post del usuario actual
      let posts = await obtenerPost(user.id);

      let postsConComentarios = await Promise.all(
        //Recorremos los post del usuario y agregarle sus comentarios
        posts.map(async (post) => {
          //Obtenemos los comentarios del post actual
          let comentarios = await obtenerComentarios(post.id);
          //Retornamos una copia del post con la nueva propiedad comentarios
          return { ...post, comentarios };
        })
      );
      //Retornamos una copia del usuario con la nueva propiedad "posts"
      return { ...user, posts: postsConComentarios };
    })
  );

  //Recorrer y mostrar cada usuario
  for (const user of postUsuarios) {
    console.log(user);
  }
};

agruparDatos();
