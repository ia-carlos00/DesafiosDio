function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso:
let quantidadeVitorias = prompt("Digite a quantidade de vitórias: ");
let quantidadeDerrotas = prompt("Digite a quantidade de derrotas: ");

quantidadeVitorias = parseInt(quantidadeVitorias);
quantidadeDerrotas = parseInt(quantidadeDerrotas);

const { saldoVitorias, nivel } = calcularNivel(quantidadeVitorias, quantidadeDerrotas);

const mensagem = `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`;
console.log(mensagem);
