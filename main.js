let botaoBracos = document.getElementsByClassName('controle-contador')[0].value;
console.log(botaoBracos)

const botaoBracosAdicionar = document.getElementsByClassName('controle-ajuste')[1];

// function somarBracos(){
//     botaoBracos = botaoBracos + '1';
// }

botaoBracosAdicionar.addEventListener("click", () => {console.log(botaoBracos)})