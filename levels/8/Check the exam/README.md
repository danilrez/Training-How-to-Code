# Pete, the baker


### Details:

Check the exam
https://www.codewars.com/kata/5a3dd29055519e23ec000074
JS
const checkExam = (array1, array2) => {
let score = 0;

for (let i = 0; i < array1.length; i++)
(array1[i] == array2[i]) ? score += 4 : (array2[i] === "") ? score += 0 : score -= 1

if (score < 0) score = 0
return score
}

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
