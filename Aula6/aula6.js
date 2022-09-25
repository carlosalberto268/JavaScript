//Realizar uma tarefa , não devolve nada.
function dizerNome(){
    console.log('Carlos');
}
dizerNome();
//Faz um cálculo ou operação e retorna algo
function MultiplicarPorDois(valor){
    return valor* 2;
}
console.log(MultiplicarPorDois(6));

//É atribuido na função resultado o valor de MultiplicarPorDois
let resultado = MultiplicarPorDois(5);

console.log(resultado)