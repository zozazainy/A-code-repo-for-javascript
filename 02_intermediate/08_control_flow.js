/*
if (condition){
    scope
}
*/
if (2==="2"){
    console.log ("executed")
};
const temp=44
if (temp<50){
    console.log ("temperature is less than 50")
}
else{
    console.log ("temperature is not less than 50")
}

const score=8;
if (score >10){
    const power="fly"
    console.log (`user power: ${power} `)
}

if (500>400) console.log ("500 is greater than 400");

//+++++++++++++++++++++++ nested conditions +++++++++++++++++++++

const balance= 100
if (balance<50){
    console.log ("balance is less than 50")

}else if (balance < 70){
    console.log ("balance is less than 70")
}else if (balance <78){
    console,log ("balance is less than 78")
}
else{
    console.log("balance is equal to 100")
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const userloggedin=true
const debitcard=true
if (userloggedin && debitcard){
    console.log ("allow to buy objects")
}

const loggedinfromgoogle=false
const loggedinfromemail=true
if (loggedinfromgoogle || loggedinfromemail){
    console.log ("user is logged in")
}

//+++++++++++++++++++++++++++++ switch case statements +++++++++++++++++++++
/*switch (key){
    case value:
        break;

    default:
        break;

}
*/
const month=3
switch (month){
    case 1:
        console.log ("january")
        break;

    case 2:
        console.log ("feburary")
        break;

    case 3:
        console.log ("march")
        break;

    case 4:
        console.log ("april")
        break;

    case 5:
        console.log ("may")
        break;
    
    case 6:
        console.log ("june")
        break;

    case 7:
        console.log ("july")
        break;

    case 8:
        console.log ("august")
        break;

    case 9:
        console.log ("september")
        break;

    case 10:
        console.log ("october")
        break;

    case 11:
        console.log ("novemeber")
        break;

    case 12:
        console.log ("december")
        break;

    default:
        console.log ("default case match")
        break;

}