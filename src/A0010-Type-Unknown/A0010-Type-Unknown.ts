let x: any;
x = 100;
x = 'Luiz';

const z = 100;

console.log(x + z);

////

let y: unknown = 500;

if (typeof y === 'number') console.log(x + y);
