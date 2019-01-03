
let pessoas = [{chave: 'lle', matricula: 34144}, {chave: 'mcp', matricula: 36543}, {chave: 'rss', matricula: 34170}];

// ANTES
let pessoasOrd = pessoas.sort(function(a, b) {
    return b.matricula < a.matricula;
});
console.log(JSON.stringify(pessoasOrd));

// DEPOIS
let pessoasOrd2 = pessoas.sort((a, b) => b.matricula < a.matricula);
console.log(JSON.stringify(pessoasOrd2));