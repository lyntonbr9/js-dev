var BigDec = /** BigDecimal Class **/ (function () {
    
    function BigDec(num, scale = 2) {
        this.scale = scale;
        // verifica se for string entao converte
        if (typeof num === 'string') 
            this._value = Number(num.replace(',', '.'));
        else   
            this._value = num;
    }

    Object.defineProperty(BigDec.prototype, "value", {
        get: function () {
            var fator = Math.pow(10, this.scale);
            var round = Math.round(this._value * fator)
            return round/fator;
        },
        set: function (val) {
            this._value = val;
        }
    });

    return BigDec;
}());
