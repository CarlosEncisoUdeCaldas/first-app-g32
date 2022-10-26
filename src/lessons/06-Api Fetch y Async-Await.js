//API fetch
function getFileJson() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then( (response) => response.json() )
    .then( (data) => data )
    .catch( (error) => console.log("Error: ", error) );
}
//funcion tradicional
async function convertAsync (){
    const capturaDeFileJson = await getFileJson();
    console.log( capturaDeFileJson[0] );
}

//funcion flecha del async - await
// const convertAsync = async () => {
//     const capturaDeFileJson = await getFileJson();
//     console.log( capturaDeFileJson[0] );
// }

convertAsync();