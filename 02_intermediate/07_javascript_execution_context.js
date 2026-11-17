/*javascript excution context
there are three types of ececution context in javascript
1. global excution context
2. function excution context
3. eval excution context
+++++++++++++++++++++++++++Description of each type of excution context+++++++++++++++++++++++++++++++
1. global excution context: it is the default or base excution context where any javascript code runs. it creates a global object and a special object called this. in the browser, the global object is window, in node.js, it is global.
2. function excution context: whenever a function is invoked, a new excution context is created for that function. each function has its own excution context which contains its own variable object, scope chain and this value.
3. eval excution context: code executed inside an eval function has its own excution context but it is not recommended to use eval due to security and performance issues.
*/

//1. Global Execution Context (GEC)
let name = "Zubair";
let age = 22;

function greet() {
    console.log("Hello " + name);
}

console.log(name);
console.log(age);
greet();

//2. Function Execution Context (FEC)

let a = 10;

function add() {
    let b = 20;
    let sum = a + b;

    console.log(sum);
}

add();

//3. Eval Execution Context (EEC)

let x = 10;

eval("console.log(x + 20)");

