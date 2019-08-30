// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

let pessoas = [{chave: 'lle', matricula: 34144}, {chave: 'mcp', matricula: 36543}, {chave: 'rss', matricula: 34170}];

let matriculaMax = 36000;

let pessoasfiltradas  = pessoas.filter((element) => element.matricula < matriculaMax);
console.log(JSON.stringify(pessoasfiltradas));
//console.log(pessoas[0] === pessoasfiltradas[0]);
