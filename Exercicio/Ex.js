let a = 'vermelho';
let b = 'azul';

let resultado1 = a || b;
let resultado2 = b || a;

console.log(a);
console.log(b);

console.log(resultado2);
console.log(resultado1);


let c = 'vermelho';
let d = 'azul';

let e = c; //guardar o valor 1
c = d; //passar o valor da 2 para a primeira
d = e; //

console.log(c);
console.log(d);
