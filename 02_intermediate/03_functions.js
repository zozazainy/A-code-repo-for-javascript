function z(){
    console.log ("zoza")
    console.log ("zo")
    console.log ("za")
    console.log ("a")
}
z()

function add2numbers(a,b){
    const x=a;
    const y=b;
    console.log (x+y)


}

add2numbers(2,4)

function subtract2num(a,b){
    const l=a;
    const q=b
    let s= l-q;
    return s
    console.log ("zozazainy ") // after return function will not give us the output for this line
}
console.log ("result", subtract2num(9,8))

function loginusermessage(username="zoza"){
    if (!username){
        console.log ("please provide a username")
    }
    return `${username} just login`
}
//console.log (loginusermessage("zoza"))
//console.log (loginusermessage(""))
console.log (loginusermessage())

function calculatecartprice(val1,val2,...num1){
    return num1; 
}
console.log (calculatecartprice (10,200,390,909090,989898))

const user = {
  username: "zoza",
  age: 78
};
function getuserdetails(anyobj){
    console.log (`username is ${anyobj.username} and age ${anyobj.age}`);
}
//getuserdetails(user)
getuserdetails({
    username: "zoza",
    age: 88
})

const array=[12,3,4,5]
function returnsecondvalue(getarray){
    return getarray[1]

}
//console.log (returnsecondvalue(array))
console.log (returnsecondvalue([1,2,3,4]))