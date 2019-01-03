/*
//var numero = "25,85675595721";
var numero = 25.85675595721;
for (var i = 1; i < 11; i++) {
    var bd = new BigDec(numero);
    console.log(bd.value);
    bd.scale = 5;
    //bd.value = 15.589894153;
    console.log(bd.value);
}*/

var objEnum = {};
Object.defineProperty(objEnum, 'COMPRAR', {
    enumerable: false,   // não enumerável
    configurable: false, // não configurável
    writable: false,     // não gravável
    value: 'C'
});

Object.defineProperty(objEnum, 'VENDER', {
    enumerable: false,   // não enumerável
    configurable: false, // não configurável
    writable: false,     // não gravável
    value: 'V'
});

console.log(objEnum.COMPRAR);
objEnum.COMPRAR = 'V2';
console.log(objEnum.COMPRAR);
console.log(objEnum.VENDER);