//objects literals
const sy=Symbol("z1")

const jsy = {
    name: "zoza",
    age: 18,

    w: function() {
        console.log(`My name is ${this.name}`);
        console.log(`My age is ${this.age}`);
    }
};

jsy.w();

console.log (jsy.name)
console.log (jsy["email"])
console.log (jsy[sy])

jsy.name="kolip"
console.log (jsy)

// if you want to make the keys and values of objects unchangeable
  
Object.freeze(jsy)
jsy.email="lopil@gmail.com"
console.log (jsy.email)

console.log ("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")

//singleton
const e=new Object ()
const cc={}
cc.id="123abc"
cc.name="zoza"
cc.isloggedin=false
console.log (cc)


const hy = {
    email: "sole@gmail.com",
    fullname: {
        username: {
            firstname: "loplio",
            lastname: "koulp",
        }
    }
};

console.log(hy.fullname.username.lastname);


console.log (e)
console.log (cc)
console.log (typeof (e))
console.log (typeof(cc))

const q={
    1:"a",
    2:"b"
}
const k={
    3:"l",
    4:"m"
}
const y={
    5:"ll",
    6:"kk"
}
const xx=Object.assign(q,k)
console.log (xx)
const ee=Object.assign ({},k,q,y)
console.log (ee)

const d={...q,...k,...y}
console.log (d)

const t=[
    {
    id: 1,
    email: "h@gmail.com",



},
{
    id: 1,
    email: "h@gmail.com",



},
{
    id: 1,
    email: "h@gmail.com",



},
]
console.log (t[1].email)
console.log (Object.keys(jsy))
console.log (Object.values(jsy))
console.log (Object.entries(jsy))
console.log (jsy.hasOwnProperty('name'))
console.log (jsy.hasOwnProperty('isloggedin'))

//Destructuring

const course={
    coursename: "javascript",
    price: "2343",
    courseinstructor: "meow",

}

const {courseinstructor: ins} = course
console.log (ins)

