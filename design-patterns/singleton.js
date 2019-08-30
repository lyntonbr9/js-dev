var Singleton = (function(){
    var instantiated;

    // metodo "privado"
    function init() {
        return {
            publicMethod: function (){
                console.log('hello world');
            },
            publicProperty: "teste"
        }
    }

    return {
        getInstance: function() {
            //if(!instantiated) {
                instantiated = init();
            //}
            return instantiated;
        }
    }
})();

var a = new Singleton.getInstance();
var b = new Singleton.getInstance();
var c = new Singleton.getInstance();

console.log(a === b);
console.log(b === c);
console.log(Singleton.getInstance().instantiated);
console.log(Singleton.getInstance().publicProperty);
console.log(Singleton.getInstance().publicMethod());