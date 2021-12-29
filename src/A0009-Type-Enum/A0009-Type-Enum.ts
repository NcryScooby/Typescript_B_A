enum Cores {
    VERMELHO, // 0
    AZUL, // 1
    AMARELO, // 2
}

enum Cores {
    ROXO = 'ROXO', // 'Roxo'
    VERDE = 201, // 'Verde'
    LARANJA = 'LARANJA', // 'Laranja'
}

console.log(Cores.VERMELHO);
console.log(Cores[0]);
console.log(Cores.ROXO);

function escolhaCor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaCor(Cores.VERDE);