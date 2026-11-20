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

//while loop

let index=0;
while (index <=10){
  console.log ("the number is " , index);
  index=index+2;

}

let array=[1,2,3,4,5]
let arr=0
while (arr<=array.length){
  console.log (array[arr])
  arr++
}   

//do while loop
/* do{
}
while (condition);
*/

let score=3
do {
  console.log (`score is ${score}`)
  score++;
}while (score<=30);

//for of loop

const arry=[1,2,3,45,6]
for (const num of arry){
  console.log (num)
}

let char="zozazainy"
for (const t of char){
  console.log (t)
}

//maps
const map=new  Map()
map.set("im","imran")
map.set("z","zoz")
map.set("a","ali")
map.set("k","khan")
map.set("im","imran")
//console.log (map)
/*for (const i of map){
  console.log(i)
}
  */

for (const [key,value] of map){
  console.log (key, ":-" , value)
}

const myobj={
  "name": "zoza",
  "age": 67
}

