//Tipos de Operadores em Javascript
//Operadores Aritimécos - Matemátivos
let salário = 100;

console.log(salário + salário);
console.log(salário - salário);
console.log(salário * salário);
console.log(salário / salário);
console.log(5 ** 5);
//operadores de incremeto e decremento
let idade = 38;

//1ª Forma
console.log(idade++); //Ele soma o resultado mas não mostra nada
console.log(idade); // é preciso adicionar mais um console para que o resultado de incremento apareça
console.log(idade--);
console.log(idade);
//2ª Forma
let altura = 58;

console.log(++altura);//Adicionando o ++ antes do atributo
console.log(--altura);

//Operadoes de atribuição
//Desta forma o = atribui ao valorTecladoGames o valor de 100
let valorTecladoGames = 128;
//valorTecladoGames += valorTecladoGames; //atribui valor (valorTecladoGames + valorTecladoGames)
//valorTecladoGames -= valorTecladoGames; //atribui valor (valorTecladoGames - valorTecladoGames)
valorTecladoGames *= valorTecladoGames; //atribui valor (valorTecladoGames * valorTecladoGames)
//valorTecladoGames /= valorTecladoGames; //atribui valor (valorTecladoGames / valorTecladoGames)
console.log(valorTecladoGames);

//Operadores de comparação 
//Igualdade estrita
console.log(1 === 1); //Ele alem de comparar genero ele compara tipo (ambos não boolean) sendo true
console.log( '1' === 1); //Nessa caso ele compra os tipo sendo um string e outro booleam, sendo false

//igualdade solta
console.log(1 == 1); //compara apenas se são iguais os valores
console.log('1' == 1); //ignora o tipo

//Operadores ternário
//Tem um cliente com pontuação 100, logo ele pode ser premiu, caso não é comum
let pontos = 110;
let tipo = pontos > 100 ? 'premium' : 'comun';
//Função = atributo com condição(pontos > 100) Resultado se sim e resultado se não
//Se pontos for maior que 100, ele é tipo premium, caso não ele será comum
console.log(tipo);

//Operadores Lógicos
//Operador Lógico E (&&)
//Retorna TRUE se os dois operadores forem true
console.log(true && true);
console.log(false && true);

let maiorDeIdade = true;
let possuiCTPS = true;
let podeAplicar = maiorDeIdade && possuiCTPS;
console.log('Pode Aplicar',podeAplicar);
//Para ser true é necessário que todas as condições sejam verdadeira

//Operador Lógico OU (||)
//Retorna TRUE se um dos dois operadores forem true
let maiorDeIdade1 = false;
let possuiCTPS1 = false;
let podeAplicar1 = maiorDeIdade1 || possuiCTPS1;
console.log('Pode Aplicar',podeAplicar1);

//Operador Lógico NOT (!)
//Retorna TRUE se um dos dois operadores forem true
let candidatoRecusado = !podeAplicar1;

console.log('Candidato recusado',candidatoRecusado);

//Operadores comparação com valores não booleanos
//falsy = undefined, null, 0(Zero), false, ''(String Vazios), NaN (Not a Number)- Not a number
let corPersinalizada0 = ''; //String vazio = falsy
let corPadrao0 = 'azul';
let corPerfil0 = corPersinalizada0 || corPadrao0;

console.log(corPerfil0);

//truthy = tudo que não seja falsy

let corPersinalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersinalizada || corPadrao;

console.log(corPerfil);

//Operadores Bitwise