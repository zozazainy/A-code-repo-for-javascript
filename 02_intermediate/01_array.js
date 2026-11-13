const m=['zoza','zainy','karachi']
const g=['q','p','o']
//push just putting the array inside of another array with its brackets 
m.push(g)
console.log(m)
console.log (g)
let x=[1,2,3]
let z=[22,33,44]
// concate joined the two arrays and give us a new array back....
console.log (x.concat(z))
console.log ("+++++++++++++++++++++++++++++++++++++++++++++++++++++")

const v=[...m,...g]
console.log (v)

let b=[1,2,[3,4],6,[3,4,[5,6],9]]
let l=b.flat(Infinity)
console.log (l)

console.log (Array.isArray("zozazainy"))
console.log (Array.from("zozazainy"))

console.log (Array.from({name:"zoza"}))
let ss=100
let dd=7878
let df=909090
console.log (Array.of(ss,dd,df))