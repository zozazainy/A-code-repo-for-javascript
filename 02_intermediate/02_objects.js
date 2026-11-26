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
