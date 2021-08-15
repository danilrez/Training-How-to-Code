# Pete, the baker

### Details:

RGB To Hex Conversion
https://www.codewars.com/kata/513e08acc600c94f01000001
JS
const rgb = (r, g, b) => rgbToHex(r) + rgbToHex(g) + rgbToHex(b)

const rgbToHex = item => {
if (item > 255) return 'FF'
if (item < 0) return '00'
return item.toString(16)
.padStart(2,'0')
.toUpperCase()
}

### Solutions:

[JavaScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [TypeScript](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [C#](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [PowerShell](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
