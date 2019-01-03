// aumenta uma precisao arredonda 

//var a = 15.89758255;
var a = 25.85675595721;
var nr = 5;
var pd = Math.pow(10, nr);

// A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
// A função Math.ceil(x) retorna o maior número inteiro maior ou igual a "x".
var mult = a*pd;
var mr = Math.round(mult);
var b = mr/pd;

console.log(b);
console.log('terminou');
