# Pete, the baker

### Details:

Valid Parentheses
https://www.codewars.com/kata/52774a314c2333f0a7000688
JS
const validParentheses = str => {
let n = 0;
for (let i = 0; i < str.length; i++) {
if (str[i] === '(') n++;
if (str[i] === ')') n--;
if (n < 0) return false;
}
return n === 0;
}

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
