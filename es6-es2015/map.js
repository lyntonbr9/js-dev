// ANTES NAO TINHA

// DEPOIS
let pessoas = [{chave: 'lle', matricula: 34144}, {chave: 'mcp', matricula: 36543}, {chave: 'rss', matricula: 34170}];

let pessoasMapeadas  = pessoas.map((element) => { return {codigo: 1, key: element.chave}});

console.log(JSON.stringify(pessoasMapeadas));
