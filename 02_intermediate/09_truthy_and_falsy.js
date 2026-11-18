const useremail="zozazainy"
if (useremail){
    console.log ("user got email")
}else{
    console.log ("don't have user email")
}

//false values are
//false
//0
//-0
//BigInt 0n
// ""
//null
//undefined
//NaN

//truthy values are
//"0"
//"false"
//" "
//[]
//{}
//function(){}

if (useremail.length===0){
    console.log ("Array is empty")
}

const emptyobj={}
if (Object.keys(emptyobj).length===0){
    console.log ("object is empty")
}

//+++++++++++++++++++ nullish coalescing operator +++++++++++++++++++++

let val;
val=5 ?? 10
console.log (val)

val2= null ?? 10
console.log (val2)

val3= undefined ?? 60
console.log (val3)

val4= null ?? 60 ?? 90
console.log (val4)

//++++++++++++++++++++++++++++ ternary operator ++++++++++++++++++++++++
 
//condition ? true : flase
const iceprice =90
iceprice > 80 ? console.log ("less than 90") : console.log ("more than 90")