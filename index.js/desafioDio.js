// Calculadora de partidas rankeadas
//
function contarVitoriaDerrota(vitoria, derrota){
const saldodeVitoria = vitoria- derrota;


 if( nivel= vitoria < 10){
    console.log( ' Ferro');

 }else if(nivel= vitoria <= 11 && vitoria >= 20){
    console. log(nivel=' Bronze');
 }else if(  vitoria <= 21 && vitoria >= 50){
    console.log( nivel=' Prata');
 }else if( vitoria >= 51 && vitoria >= 80){
    console.log(nivel=' Ouro');
 } else if( vitoria <= 81 && vitoria >= 90){
    console.log(nivel=' Diamante');
 } else if( vitoria <= 91 && vitotia >= 100){
    console.log(nivel=' Lendário')
 } else {
    console.log(nivel=' Imortal')
 }
// Exibindo uma mensagem 
console.log('O Herói tem saldo de '+ saldodeVitoria, ' e está no nivél de :'+ nivel);
contarVitoriaDerrota( 8, 15)
}