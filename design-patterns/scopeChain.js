function assignEvents() {
    var id = 'xdi9592';

    var a = function (event) {
        console.log(id);
        var atrib2 = 'teste2';
        var b = function (c1) {
            eval('id = "abc";');
            console.log(atrib2);
        }
        b();
    }
    a();

}

assignEvents();
