// import users from './data/users'  //importando un elemento por defecto
// import { saludo } from './data/users'  //importacion de manera sencilla o individual

//las dos lineas de arriba se pueden simplificar en una sola linea
import  users , {  saludo , numeroDeGrupo } from './data/users'

console.log( users );
saludo();
console.log( numeroDeGrupo );