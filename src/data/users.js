//este es un array de objetos tipo usuarios
const users = [
    {  id: 1, nombre: 'Juancho', apellido: 'Mecanico', rol:'empleado' },
    {  id: 2, nombre: 'Wilson',  apellido: 'Spalding', rol:'empleado' },
    {  id: 3, nombre: 'Vilma', apellido: 'Picapiedra', rol:'admin' },
    {  id: 4, nombre: 'Pedro', apellido: 'Picapiedra', rol:'empleado' },
    {  id: 5, nombre: 'Dino', apellido: 'Picapiedra', rol:'admin' },
] ;

//esta es una exportacion individual o simple
export function saludo() {
    console.log('Hola grupo 32');
}

export const numeroDeGrupo = 32 ;

//funcion find por busqueda de id
export const getElementById = (id) => users.find( (item) => item.id === id )

//funcion find por busqueda de nombre
export const getElementByName = (nombre) => users.find( (item) => item.nombre === nombre )

//funcion find por busqueda de nombre
// export const getElementByRol = (rol) => users.find( (item) => item.rol === rol )

//en vez de usar find usamos la funcion filter
export const getElementByRol = (rol) => users.filter( (item) => item.rol === rol )

//primera forma de hacer la exportacion en javaScript
//El export default solo exporta un solo elemento por defecto
export default users;

//esta seria la tercera manera de export elementos desde el users.js
// export {
//     users as default,
//     saludo,
//     numeroDeGrupo
// }