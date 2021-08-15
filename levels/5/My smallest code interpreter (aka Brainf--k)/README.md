# Pete, the baker

### Details:

My smallest code interpreter (aka Brainf\*\*k)
https://www.codewars.com/kata/526156943dfe7ce06200063e
TS
export const brainLuck = (code: string, input: string) => {
let dataPointer: number = 0;
let instructionPointer: number = 0;
let inputPointer: number = 0;
const data: number[] = [];
let output: string = "";

const getByte = () => data[dataPointer] || 0;
const setByte = (val: number) => data[dataPointer] = val;
const getInput = () => input[inputPointer++].charCodeAt(0);
const mutate = fn => data[dataPointer] = (fn(getByte()) + 256) % 256;

while (instructionPointer < code.length) {
const instruction = code[instructionPointer];
switch (instruction) {
case '>': dataPointer++; break;
case '<': dataPointer--; break;
case '+': mutate(b => b + 1); break;
case '-': mutate(b => b - 1); break;
case '.': output += String.fromCharCode(getByte()); break;
case ',': setByte(getInput()); break;
case '[':
if (getByte() === 0) {
let nesting = 1;
while (nesting > 0) {
instructionPointer++;
if (code[instructionPointer] === ']') { nesting--; }
else if (code[instructionPointer] === '[') { nesting++; }
}
} break;
case ']':
if (getByte() !== 0) {
let nesting = 1;
while (nesting > 0) {
instructionPointer--;
if (code[instructionPointer] === '[') { nesting--; }
else if (code[instructionPointer] === ']') { nesting++; }
}
} break;
default: throw new Error(`Unknown instruction ${instruction}`);
}
instructionPointer++;
}
return output;
}

### Solutions:

[<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/javascript.svg" height="24px" alt="JavaScript">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/JS.js), [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/typescript.svg" height="24px" alt="TypeScript">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/TS.ts), [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/csharp.svg" height="24px" alt="C#">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/C%23.cs), [<img src="https://github.com/CrappyCodeMaker/Training-How-to-Code/blob/master/images/logo/powershell.svg" height="24px" alt="PowerShell">](https://github.com/CrappyCodeMaker/CODEWARS/blob/main/5%20kyu/Gap%20in%20Primes/Solutions/PS.ps1)
