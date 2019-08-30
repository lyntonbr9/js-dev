// THIS DO TIMER NAO SE REFERE AO COUNTER
/*function Counter() {
    this.num = 0;
    this.timer = setInterval(function add() {
        this.num++;
        console.log(this, this.num);
        //console.log(this.num);
    }, 1000);
}

var b = new Counter();*/

// COM ARROW FUNCTION O THIS NAO EH BINDED COM A FUNCAO
function Counter() {
    this.num = 0;
    this.timer = setInterval(() => {
        this.num++;
        console.log(this.num);
    }, 1000);
}
var b = new Counter();