// Date
let h=new Date()
console.log (h)
console.log (h.toString())
console.log (h.toDateString())
console.log(h.toLocaleString())
console.log (typeof(h))

let f=new Date(2023,7,9)
console.log (f)
console.log (f.toDateString())

let u=new Date(2023,9,4,6,7,8)
console.log (u)
console.log (u.toLocaleDateString())

let o=new Date ("2012-01-23")
console.log (o)

let v=Date.now()
console.log (v)
console.log (o.getTime())
console.log (o.getDate())
console.log (o.getDay())

console.log (Math.floor(Date.now()/1000))


let x = new Date();

console.log(
  x.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Karachi'
  })
);
