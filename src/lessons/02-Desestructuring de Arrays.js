//Desestructuracion de Arrays
const fruitsNames = [ 'Fresa', 'Mango', 'Banana', 'Kiwi'];
console.log(fruitsNames);

//1. desestructuracion de arrays se hace en el mismo orden de las posiciones
// const [ fruit00, fruit01, fruit02, fruit03 ] = fruitsNames;

//2. desestructuracion de solo la posicion 3 del array fruitsNames
// const [ , fruit01, , fruit03 ] = fruitsNames;

//3. desestructuracion con el operador spread
const [ fruit00, ...restoArrayFruits ] = fruitsNames;
console.log(fruit00);
console.log(restoArrayFruits);
// console.log(fruit01);
// console.log(fruit02);
// console.log(fruit03);
console.log(fruitsNames);

//valga la aclaracion que el nombre de las variables es a discrecion del programador