# Pete, the baker

### Details:

Count of positives / sum of negatives
https://www.codewars.com/kata/576bb71bbbcf0951d5000044
JS
const countPositivesSumNegatives = input => {
if (input === null || input.length === 0) return [];

let positive = 0, negative = 0;

for (let i = 0, l = input.length; i < l; i++) { (input[i] > 0) ? positive++ : negative += input[i] }

return [positive, negative];
}

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)