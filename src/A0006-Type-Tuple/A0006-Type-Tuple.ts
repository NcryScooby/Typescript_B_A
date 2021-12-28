//tupla
const dadosCliente: [number, string] = [1, 'Fabrício'];
const dadosCliente2: [number, string, string] = [1, 'Fabrício', 'Caldana'];
const dadosCliente3: [number, string, string?] = [1, 'Fabrício'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Fabrício', 'F', 'B', 'C', 'A'];

console.log(dadosCliente);

dadosCliente[0] = 100;
dadosCliente[1] = 'José';

console.log(dadosCliente);
console.log(dadosCliente2);
console.log(dadosCliente3);


// Readonly Array
const array: readonly string[] = ['Fabrício', 'Caldana', 'Anelli'];
