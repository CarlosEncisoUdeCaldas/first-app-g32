//Desestructuracion de Objetos
const persona = {
    id:  1,
    nombre: 'Osito',
    apellido: 'Cariñosito',
    ubicacion: {
        lat: 4.123,
        long: 21.654
    }
}
console.log(persona)
// console.log(persona.id)
// console.log(persona.nombre)
// console.log(persona.apellido)

//Desestructurar un objeto es fragmentarlo o desglosarlo en variables nuevas que almacenen
//  los valores de sus  propiedadas
// y la lectura sea mucho mas comoda para el programador
// const {   ubicacion:{ lat , long }, id   } = persona //desestructuracion directa de la propiedad ubicacion
// const {   ubicacion , id   } = persona //desestructuracion propiedad por propiedad de ubicacion
// console.log(id);
// console.log(ubicacion);

// const { lat, long } = ubicacion
// console.log(lat);
// console.log(long);

// console.log(nombre);
// console.log(apellido);

//declaracion de la funcion para imprimir las propiedades de un objeto persona
function showInfoPerson( { nombre, apellido, id, ubicacion } ) {
    const { long, lat } = ubicacion;
    console.log(`Su nombre completo es ${nombre} ${apellido}`);
    console.log(`Su id es: ${id}`);
    console.log(`Su ubicacion es latitud ${lat} y su longitud es ${long}` );
    console.log( persona );
}
//fin de la declaracion de la funcion para imprimir las propiedades

function returnPersona () {
    const persona = {
        id: 2,
        nombre: 'Tom',
        apellido: 'Jerry'
    }
    return persona;
}

showInfoPerson ( persona );

// voy a llamar la function returnPersona y el resultado se lo asigno a una variable
const resultPersona = returnPersona();
const { nombre } = resultPersona
console.log( nombre );

