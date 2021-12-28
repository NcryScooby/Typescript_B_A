//Type Annotation = tudo que vem depois do :

// Tipos Básicos

let nome: string = 'Fabrício';
let idade: number = 30;
let adulto: boolean = true;
let simbolos: symbol = Symbol('qualquer-symbol');
//let big: bigint = 10n;


// Arrays

let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];

let arrayDeStrings: Array<string> = ['1', '2', '3'];
let arrayDeStrings2: string[] = ['1', '2', '3'];

// Objetos

let pessoa: {
  nome: string,
  idade: number,
  adulto?: boolean
} = {
  nome: 'Fabrício',
  idade: 21
}

// Funções

function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
