//Funcion que obtiene los datos de una url y se deserializan
const solicitud = async (url) => {
  //Obtenemos los datos
  const peticion = await fetch(url);
  //Deserializamos los datos
  const data = await peticion.json();
  //Retornamos los datos
  return data;
};

export default solicitud;
