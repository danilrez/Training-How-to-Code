# Pete, the baker

### Details:

Directions Reduction
https://www.codewars.com/kata/550f22f4d758534c1100025a
JS
const dirReduc = (arr) => {
const oppositeDirs = {
NORTH: 'SOUTH',
SOUTH: 'NORTH',
WEST: 'EAST',
EAST: 'WEST',
};

return arr.reduce((acc, el) => {
acc[acc.length - 1] === oppositeDirs[el] ? acc.pop() : acc.push(el);
return acc;
}, []);
};

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
