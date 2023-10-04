/* Este archivo una una API para obtener los datos: name, blog y location.
Al tener error llama a la funcion handleError y muestra en el DOM que algo salió mal*/

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //Se agrega punto de la clase name
const $b = document.querySelector('.blog'); //Se agrega punto de la clase blog
const $l = document.querySelector('.location');

//Dentro de la funcion hay un await, esto quiere decir que es una funcion asincrona, por lo que se tiene que declarar
 async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Se agrega await response.json() para esperar la respuesta del servidor y guardar la informacion en la constante "data"
  console.log(data);
  $n.textContent = data.name; //Se limpia la sintaxis
  $b.textContent = data.blog; //Se limpia la sintaxis
  $l.textContent = data.location; //Se limpia la sintaxis
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`
} //Se agrega $ antes de la n, como está definida anteriormente.

displayUser('stolinski').catch(handleError);