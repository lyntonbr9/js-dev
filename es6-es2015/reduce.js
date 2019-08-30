//O método reduce()executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue, index, arrayOriginal) => { console.log('arrayOriginal', JSON.stringify(arrayOriginal)); return accumulator + currentValue};

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15