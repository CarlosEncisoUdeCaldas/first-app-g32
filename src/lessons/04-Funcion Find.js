// import users from './data/users'  //importando un elemento por defecto
// import { saludo } from './data/users'  //importacion de manera sencilla o individual

//las dos lineas de arriba se pueden simplificar en una sola linea
import  users , {  saludo , numeroDeGrupo, getElementById, getElementByName } from './data/users'

console.log( users );
saludo();
console.log( numeroDeGrupo );

// //funcion find en Arrays con declaracion tradicional o completa
// const getElement = users.find( function (item) {
//     return item.id === 2
//  })

//funcion find tipo flecha
// const getElement = users.find( (item) => item.id === 2 )

//voy a transformar la funcion find para que reciba un parametro de tipo id
// const getElementById = function(id){
//     return users.find( (item) => item.id === id )
// }

//funcion transformada en flecha
// const getElementById = (id) => users.find( (item) => item.id === id )


const resultBusquedaPorId = getElementById ( 2 );

//valido si el usuario existe o no
if (resultBusquedaPorId) {
    console.log('Usuario encontrado en la base de datos');
    const {id, nombre, apellido} = resultBusquedaPorId;
    console.log(`El usuario con el id ${id} es ${nombre} ${apellido}`);
}else{
    console.log('Usuario no encontrado');
}

//busqueda por la propiedad nombre del array users
const resultByNombre = getElementByName ('Vilma')
console.log(resultByNombre);

// console.log( resultBusquedaPorId );
// console.log( getElementById (4) );