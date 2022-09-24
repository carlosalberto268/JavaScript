//Como nomear uma função Verbp + Substativos
let corSite = 'azul';
function resetaCor(cor,tonalidade){
corSite = cor + tonalidade; // +  usado para concatenar valores
};

console.log(corSite);
resetaCor("vermelho");
console.log(corSite)

console.log(corSite);
resetaCor();
console.log(corSite);

console.log(corSite);
resetaCor("Verde"," claro");
console.log(corSite);