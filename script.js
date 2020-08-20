//Iterando um array
const numeros = [1,2,3,4,5,6,7,8,9];
//1°forma
//for(numero of numeros)
//console.log(numero);
//2°forma sem arrow function
//numeros.forEach(function(numero) {
//  console.log(numero);
//})
//3°forma com arrow function
numeros.forEach((indice, numero) => console.log(indice, numero));
