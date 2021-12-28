// Array<T> - T[]

export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((acumulador, valor) => acumulador * valor, 1)
}

export function concatenaString(...args: string[]): string {
  return args.reduce((acumulador, valor) => acumulador + valor)
}

export function transformaMaiusculo(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3, 4, 5);
const concatencao = concatenaString('a', 'b', 'c');
const upper = transformaMaiusculo('a', 'b', 'c');

console.log(result);
console.log(concatencao);
console.log(upper);
