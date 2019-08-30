var br = { object: {} };
/**
* Retorna o atributo do objeto através do path do atributo separado por ponto.
* Ex: colaborador.contato.email
* 
* @param objeto {Object} o objeto a ter o atributo retornado.
* @param pathAttr {String} caminho até o atributo do objeto. Ex: colaborador.contato.email
* @return {Object} o atributo do objeto através do path do atributo separado por ponto.
*/
br.object.getAttr = function (objeto, pathAttr) {
    // cria o array com o caminho para o atributo
    var attrs = pathAttr.split('.');
    // chama recursivamente a recuperacao do atributo
    return this._getAttrRecursive(objeto, attrs);
}

/**
* Retorna o atributo do objeto através do array do path do atributo.
* Ex: pathAttrs = ['colaborador', 'contato', 'email']
* 
* @param objeto {Object} o objeto a ter o atributo retornado.
* @param pathAttrs {Array<String>[]} array com o caminho até o atributo do objeto.
* @return {Object} Retorna o atributo do objeto através do array do path do atributo.
*/
br.object._getAttrRecursive = function (objeto, pathAttrs) {
    // caso o objeto na pesquisa seja nulo 
    // entao nao eh possivel recuperar nenhum atributo e retorna null
    if (!objeto) return null;
    // recupera o primeiro atributo da lista do objeto
    var attr = objeto[pathAttrs[0]];
    // remove da lista esse atributo ja recuperado
    pathAttrs.shift();
    // se tiver chegado ao fim da lista
    if (pathAttrs.length == 0) {
        // retorna o atributo recuperado
        return attr;
    } else {
        // recupera novamente com o objeto e lista atualizados
        return this._getAttrRecursive(attr, pathAttrs);
    }
}

var funcionario = {
    empregado: {
        nome: 'Teste',
        matricula: '34144',
        org: null
        /*
        org: {
            sigla: 'GCCSD',
            hierarquia: 'PRD/DFIN/GPROJ'
        }*/
    },
    dataAdmissao: '01/01/2001'
}

//console.log(getAttr(funcionario, 'dataAdmissao'));
//console.log(getAttr(funcionario, 'empregado.nome'));
//console.log(getAttr(funcionario, 'empregado.org'));
console.log(br.object.getAttr(funcionario, 'empregado.org.hierarquia'));

