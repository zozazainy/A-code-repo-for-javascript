//for loop
let arrayy=[1,2,3,4]
console.log (arrayy.length)
for (let index= 0; index <arrayy.length; index++){
    if (arrayy[index]===3){
        console.log ("this is the lucky number")
    }
    console.log (arrayy[index])
}

for (let i=0; i<10;i++){
    for (let t=10; t<20; t++){
        console.log (t)
    }
    console.log (i)

}

//break and continue

for (let i = 1; i < 100; i++) {
  if (i === 50) {
    console.log("50 is detected");
    break; // Stops the loop only when i is 50
  }
  console.log(`the value of i is ${i}`);
}

for (let y=0;y<10;y++){
    if (y === 4){
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
while (arr<array.length){
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

//for (of) loop

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

//for(in) loop

const myobj={
  "name": "zoza",
  "age": 67
}

//finding keys of object
for (const key in myobj){
  console.log (key)
}

//finding values of object

for (const i in myobj){
  console.log (i,":",myobj[i])
}

const programming=[11,22,33,44,55]
for (const r in programming){
  console.log (r , ":" , programming[r])
  
}

const maap=new Map()
maap.set(1,"zoza")
maap.set(2,"zainy")
maap.set(3,"khan")
maap.set(4,"ali")

// Maps are not iterable
for (const q in maap){
  console.log(q)
}

//for (each) loop

const coding=["cpp","python","java","javascript"]
coding.forEach(function (item) {
  console.log (item)

})

coding.forEach( (item) => {
  console.log (item)
})

function printMe(item){
  console.log (item)
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const codings=[
  {
  language: "javascript",
  languagefile: "js"
},
{
  language: "c++",
  languagefile: "cpp"
},
{
  language: "python",
  languagefile: "py"
},
{
  language: "rubi",
  languagefile: "rb"
},
]
codings.forEach((item)=>{
  //console.log (item.language)
  //console.log (item.languagefile)
  console.log (item.language,": ", item.languagefile)
})

// const yarray=[11,22,33,44,55,66]
// const vari=yarray.forEach( (values) => {
//   console.log (values)
//   return values;
// })
// console.log (vari) 

const mynums=[1,2,3,4,5,6,7]
const newnum=mynums.filter( (num) => {
    return num>4;
}
)
console.log (newnum)

const tyou=[]
mynums.forEach( (item) => {
  if (item >0){
    tyou.push(item)
  }
})
console.log (tyou)

const books = [
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    pages: 1178,
    volumes: 3,
    genre: "Fantasy",
    publishedYear: 1954,
    isAvailable: true
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    pages: 412,
    volumes: 1,
    genre: "Science Fiction",
    publishedYear: 1965,
    isAvailable: true
  },
  {
    title: "A Song of Ice and Fire",
    author: "George R.R. Martin",
    pages: 4224,
    volumes: 5,
    genre: "Fantasy",
    publishedYear: 1996,
    isAvailable: false
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464,
    volumes: 1,
    genre: "Programming",
    publishedYear: 2008,
    isAvailable: true
  }
];
const userbook=books.filter ( (bk) => {
  return bk.genre==="Programming";
})
console.log (userbook)

const databook=books.filter((item) => {
  return item.publishedYear >= 1900;
})
console.log (databook)