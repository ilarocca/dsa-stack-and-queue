class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      //set new top
      this.top = new _Node(data, null);
      return this.top;
    }
    //else, create node, with curr top as next, set new top
    const node = new _Node(data, this.top);
    this.top = node;
    return this.top;
  }

  pop() {
    //make this top = this top next, bye
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  peek() {
    let node = this.top;
    if (node === null) {
      return node;
    } else {
      return node.data;
    }
  }

  display() {
    let node = this.top;
    while (node !== null) {
      console.log(node.data);
      node = node.next;
    }
  }

  isEmpty() {
    if (stack.top === null) {
      return true;
    } else {
      return false;
    }
  }
}

function matchingExpressions(str) {
  let allGood = true;
  let expressions = {
    "(": ")",
    "[": "]",
    "{": "}",
    "'": "'",
    '"': '"',
  };
  let tempStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let open = Object.keys(expressions).includes(str[i]);
    if (open) {
      console.log(`inputing => ${str[i]}${i}`);
      tempStack.push(`${str[i]}${i}`);
    } else {
      let close = Object.values(expressions).includes(str[i]);
      if (close && tempStack.top === null) {
        console.log(``);
        return false;
      } else if (close) {
        open = tempStack.pop();
        if (expressions[open[0]] !== str[i]) {
          console.log(
            `${open[0]} at pos ${open[1]}, does not match ${str[i]} at pos ${i}`
          );
          return false;
        }
      }
    }
  }
  if (tempStack.top !== null) {
    while (tempStack.top !== null) {
      let open = tempStack.pop();
      console.log(`Extra "${open[0]}" at position ${open[1]}`);
    }
    allGood = false;
  }
  return allGood;
}

// function sortStack(inputStack, tempStack = null, tempVar = null) {
//   if (tempStack === null) {
//     temp = new Stack();
//   }

//   if (inputStack.top === null) {
//     inputStack = tempStack;
//     return inputStack;
//   }

//   tempVar = inputStack.pop();
//   if (tempStack.top === null || tempVar < tempStack.top.data) {
//     tempStack.push(tempVar);
//     return sortStack(inputStack, tempStack);
//   }
// }

// 1
function main() {
  const starTrek = new Stack();
  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");
  // 2
  starTrek.display();
  starTrek.pop();
  starTrek.pop();
  starTrek.display();
}
main();

// 5
const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

function sortStack(stack) {
  //create new stack
  sorted = new Stack();
  while (stack.top !== null) {
    let temp = stack.pop();
    while (temp < sorted.peek()) {
      stack.push(sorted.pop());
    }
    sorted.push(temp);
  }
  return sorted;
}

sortedStack = sortStack(s);
sortedStack.display();

// 8
const firstStack = new Stack();
const lastStack = new Stack();
class Queue {
  constructor() {
    this.first = firstStack;
    this.last = lastStack;
  }
  enqueue(data) {
    if (this.first.top) {
      while (this.first.top) {
        this.last.push(this.first.pop());
      }
    }
    this.last.push(data);
    while (this.last.top) {
      this.first.push(this.last.pop());
    }
  }
  dequeue() {
    return this.first.pop();
  }
}

module.exports = Stack;
