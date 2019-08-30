// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

let pessoas = [{chave: 'lle', matricula: 34144}, {chave: 'mcp', matricula: 36543}, {chave: 'rss', matricula: 34170}];

let pessoasMapeadas  = pessoas.map((element, indice, arrayOriginal) => { console.log('arrayOriginal', JSON.stringify(arrayOriginal)); return {codigo: indice, key: element.chave}});

console.log(JSON.stringify(pessoasMapeadas));
