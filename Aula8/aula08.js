//If.. Else
//se a hora for entre 06:00 ate 12:00 é bom dia
//se estiver entre 12:00 até 18:00
//caso contratio: Boa noite
let hora = 15;

if (hora > 6 && hora < 12) {
    console.log("Bom dia");
}
else if (hora > 12 && hora < 18) {
    console.log("Boa tarde");
}

else {
    console.log("Boa noite");
}



//
//if (consição) {
    // codigo a ser executado
//}

//else if (outra condição) {
    //codigo a ser executado
//}

//else { //todas as outras condições
    //codigo a ser executado
//}


//Swit Case
let permissao; //comun, gerente, diretor
permissao = 'gerente';
switch (permissao){
    case 'comum':
        console.log('Usuario comum');
        break;//usado caso encontre a condição de comparação certa
    
    case 'gerente':
        console.log('usuario gerente');
        break;
    
    case 'diretor':
        console.log('Usuario diretor');
        break;

    default: //definir caso não seja nenhuma das condições
        console.log('Usuario não reconhecido');
}