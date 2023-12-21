// Calculadora de partidas rankeadas
//
contarVitoriaDerrota(60,5);
function contarVitoriaDerrota(vitoria, derrota){
console.log(saldodeVitoria= (vitoria- derrota));


 if( nivel= vitoria < 10){
    console.log( 'Ferro');
 }    else if(nivel= vitoria <= 11 && vitoria >= 20 ){
         console. log('Bronze');
 }    else if(  vitoria <= 21 && vitoria >= 50){
         console.log( 'Prata');
 }    else if( vitoria >= 51 && vitoria >= 80){
         console.log('Ouro');
 }    else if( vitoria <= 81 && vitoria >= 90){
         console.log('Diamante');
 }    else if( vitoria <= 91 && vitotia >= 100){
         console.log('Lendário');
 }    else {
         console.log('Imortal');
 }
// Exibindo uma mensagem 
console.log('O Herói tem saldo de '+ saldodeVitoria, ' e está no nivél de :'+ nivel);

}