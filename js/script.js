document.write("<h1>Estamos executando o script.js<h1>");
document.write("Esse script está sendo chamado no HEAD");
console.log("Primeiro");
console.log("Segundo");

//comentário de uma linha
// CTRL + ;

/*
Atalho para comentário de várias linhas
ALT + SHIFT + A
*/

// Tipagem Fraca
var teste = 1;
console.log(typeof(teste));
document.write("<hr>O valor da variável teste é " + teste);
teste = 'Mariana'
console.log(typeof(teste));
document.write("<hr>O valor da variável teste agora é " + teste);
//Varoável global - criada sem necessidade de declaração
nome = 'Mariana'
console.log(nome.toUpperCase())

// Formas de declaração de variáveis
var v1 = 5.25;
let v2 = null;
const v3 = 'teste';

console.log("Tipo de variável v1:" + typeof (v1));
console.log("Tipo de variável v2:" + typeof (v2));
console.log("Tipo de variável v3:" + typeof (v3));
console.log("Tipo de NaN:" + typeof (NaN)); // tipo number
console.log("Tipo de null:" + typeof (null)); // tipo number
console.log("Tipo de variável +infinity:" + typeof + Infinity);
const numero = "1";
// Operdores de comparação
console.log("Teste se numero == 1:" + (numero == 1));
console.log("Testa se numero == 1:" + (numero == 1));

//Adicionar uma lista no body do HTML
var lista = ['arroz', 'feijao', 'carne', 'macarrao'];
var listaUl = document.createElement('ul');

//Acessar elementos através do DOM
var body = document.getElementsByTagName('body');


console.log(listaUl);
console.log(body);

document.write("<hr>Vamos criar uma lista agora!<hr>");
body[0].appendChild(listaUl);

for (var i = 0; i < lista.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(lista[i]);
    liFor.appendChild(textoLi);
    listaUl.appendChild(liFor);
}

document.write("<hr>A <b>LISTA ACIMA</b> foi criada dinamicamente via JS.");