import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Is the phrase a palindrome? ", function (answer) {
  const re = /[\W_]/g;
  const lowRegStr = answer.toLowerCase().replace(re, "");
  const reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    console.log(`${answer} is palindrome`);
  } else {
    console.log(`${answer} is NOT palindrome`);
  }
  rl.close();
});
