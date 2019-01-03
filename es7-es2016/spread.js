var {a, b, c, ...x} = {a: 1, b: 2, c: 3, i: 4, o: 5, p: 6};

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(x); // { i: 4, o: 5, p: 6 }
