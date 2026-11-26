// immedtiately invoked function expression (IIFE) is a function that runs as soon as it is defined. It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts. The first is the anonymous function with lexical scope enclosed within the Grouping Operator (). This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
function zoza(){
    console.log (`DB CONNECTED`)
}
zoza();

//++++++++++++++++++ through iief +++++++++++++++++++++++++++
(function good (){
    console.log (`i am good `);
})();

((name) =>{
    console.log(`this is my code ${name}`)
})("zoza")