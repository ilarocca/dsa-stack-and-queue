const Stack = require("./stack");

function palindromeCheck(str) {
  const stack = new Stack();
  let reverseStr = "";

  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.top !== null) {
    reverseStr += stack.pop();
  }
  return str === reverseStr;
}

console.log(palindromeCheck("dad"));
