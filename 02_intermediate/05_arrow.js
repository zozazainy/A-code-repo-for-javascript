const user={
    username: "zozazainy",
    price: 8989,

    welcomemessage : function(){
        console.log (`welcome ${this.username} to website`)
        console.log (this)
    }
}
//user.welcomemessage()
//user.username="zainy"
//user.welcomemessage()

console.log (this)

function test(){
    let user="zozazainy"
    console.log (this)
    console.log (user)
    //console.log (this.user)// (this) only work in objects not in functions
}
test()

//+++++++++++++++++++++++ARROW_FUNCTIONS+++++++++++++++++++++++++++++++++

const zoza=()=>{
    let nameo="zainy"
    //console.log (this.nameo)
    //console.log (this)
    console.log (nameo)
}
zoza()

const add3num=(num1,num2,num3)=>{
    return num1+num2+num3

}
console.log (add3num(8,5,4))

const add2num=(num1,num2)=> num1+num2
console.log (add2num(8,5))

const sub2num= (num1,num2)=> (num1-num2)
console.log (sub2num(7,9))

const sum2num= (num1,num2)=> ({username: "zozazany"})
console.log (sum2num(0,9))

const myarr=[1,2,3,4,5,6]
myarr.forEach(fnction() {})
//myarr.forEach(() => {return })
//myarr.forEach( () = > ())