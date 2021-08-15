# Pete, the baker

### Details:

Human Readable Time
https://www.codewars.com/kata/52685f7382004e774f0001f7
JS
const humanReadable = sec => {
const time = num => num < 10 ? `0${num}` : num

const SS = time(sec % 60) ,
MM = time(Math.floor(sec/60)%60),
HH = time(Math.floor(sec/3600));

return `${HH}:${MM}:${SS}`
}

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
