//for loop
// let array=[1,2,3,4]
// console.log (array.length)
// for (let index= 0; index <array.length; index++){
//     if (array[index]==3){
//         console.log ("this is the lucky number")
//     }
//     console.log (array[index])
// }

// for (let i=0; i<10;i++){
//     for (let t=10; t<20; t++){
//         console.log (t)
//     }
//     console.log (i)

// }

//break and continue

for (let i = 1; i < 100; i++) {
  if (i == 50) {
    console.log("50 is detected");
    break; // Stops the loop only when i is 50
  }
  console.log(`the value of i is ${i}`);
}

for (let y=0;y<10;y++){
    if (y==4){
        console.log ("the value is 4")
        continue
    }
    console.log (`the value of y is ${y}`)
}

   