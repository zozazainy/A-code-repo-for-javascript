//arrays
const g=[1,2,3,4,"zoza",true]
console.log (g)
console.log (g[3])

const f=[1,2,3]
console.log (f)
const e=new Array(1,2,3,4,66)
console.log (e)
e.push(7878)
console.log (e)
e.push (37647)
console.log (e)
console.log ("++++++++++++++++++++++++++++++++++++++++")
console.log (e.pop())

e.unshift(11111110)
console.log (e)
e.shift ()
console.log (e)

console.log (e.includes(9))
console.log (e.includes(4))

console.log(e.indexOf(9))
console.log (e.indexOf(4))

const c=e.join()
console.log (e)
console.log (c)
console.log (typeof(e))
console.log (typeof(c))

//slice and splice

console.log ("A ", e)
const q=e.slice(1,3)
console.log (q)
console.log ("B ",e)

console.log (e)

const z=e.splice(1,3)
console.log (z)
console.log (e)