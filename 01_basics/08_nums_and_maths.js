const h=400
console.log (h)

const g=new Number(890)
console.log (g)
console.log (typeof (g))

const t=g.toString()
console.log(t)
console.log(typeof(t))
console.log (h.toString().length)
console.log (h.toFixed(3))

const r=3434.67
console.log (r.toPrecision(5))

const hi=10000000
console.log (hi.toLocaleString('en-IN'))

//===================Maths================================//
console.log (Math)
console.log (Math.abs(-8978))
console.log (Math.round(1,6))
console.log (Math.ceil(.2))
console.log (Math.floor(2,5))
console.log (Math.min(5,8))
console.log (Math.max(9,7,5,7,8,0,90))
console.log (Math.random())
console.log (Math.random()*10)
console.log ((Math.random ()*10)+1)
console.log (Math.floor(Math.random()*10))

const max=10
const min=7
console .log(Math.floor((Math.random()*(max-min+1))+min))