//Functions in JS
//Block of code that performs a specific task, can be invoked whenever needed


//Function Defination
// function functionName(){
//     //do some work
// }

//function functionName(param1 , param2....){
//do some work
//}

//Function Call ar invoke
//functionName();

function myFunction() {
    console.log("Welcome , radhe radhe ");
    console.log("Welcome , haare krishna ");
    console.log("We are learning JS");
}

myFunction();
myFunction();

function myFunctionn(msg, num) {//parameter
    //parameter -> input
    console.log(msg, num);
    console.log(msg * num);//NaN means not a number ap string ko num se multiply nhi krwa sakte
}
myFunctionn("naina", 1111);//argument



//Function -> 2 numbers, sum

function sum(x, y) {
    //local varibles ->scope  {}ke andar tak hi zinda he bichare
    s = x + y;
    console.log(x);//4 , yaha zindaa hee 
    return s;//return ke baad vala code execute nhi hoga kabhi bhi
}
console.log(sum(10, 20));//30
let val = sum(4, 5);
console.log(val);//9
//console.log(x); // x is not define bola na local variables sirf scope me zindaa rahenge bahar mar jate betu



// function sum(x , y){
//     //console.log(x + y);
//     s = x + y;
//console.log("before return");
//     return s;
//console.log("after return");//ye vali line kabhi execute hi nhi hogi ye code ko kabhi run hi nhi kia jayega
// }
// //console.log(sum(10,20));
// let val = sum(4,5);
// console.log(val);


//Arrow Functions  =>
//Compact way of writing function
// const functionName = (paramq , param2 ...) => {
//     //do some work
// } 
//chote kaamo ke liye arrow function jadadtar use krte


//sum function
function summ(a, b) {
    return a + b;
}


//Modern js
const arrowSum = (a, b) => {
    console.log(a + b);
}
arrowSum(10, 70);


//multiplication function
function mul(a, b) {
    return a * b;
}


const arrowMul = (a, b) => {
    console.log(a * b);
}
arrowMul(10, 90)


// let arrowMull = (a, b) => {
//     return a * b;
// };
// arrowMull = 5;

//const printHello = () => console.log("hello");
//or
const printHello = () => {
    console.log("hello");

}
printHello();

//Let's Practice
//Q. Create a function using the "function" keyword that takes a String as an argument and returns 
// the number of vowels in the string.
//Q2 Create an arrow function to perform he same task


function countVowels(str) {
    //"ApnaIndia" ,count=0 se start karenge
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}
countVowels("ApnaIndia");//3 //a , i ,a
countVowels("tara") //2 , a ,a


function countVowelss(str) {
    //"ApnaIndia" ,count=0 se start karenge
    let countt = 0;
    for (const charr of str) {
        if (charr === "a" || charr === "e" || charr === "i" || charr === "o" || charr === "u"|| charr === "A" || charr === "E" || charr === "I" || charr === "O" || charr === "U") {
            countt++;
        }
    }
    console.log(countt);
}
countVowelss("ApnaIndia");//5 //A , a , I , i ,a
countVowelss("tara") // 2 , a ,a

//Q2 Create an arrow function to perform he same task
const countVow = (str) => {
    ccount = 0;
    for (const charr of str) {
        if (charr === "a" || charr === "e" || charr === "i" || charr === "o" || charr === "u"|| charr === "A" || charr === "E" || charr === "I" || charr === "O" || charr === "U") {
            ccount++;
        }
}
console.log(ccount);
}
countVow("Ram");//1 ,a





//forEach Loop in Arrays   // ek methode hota   (function ko jab object ke sath associate kr dete he toh fir vo methode ban jata jese   "abc".toUppercase())
//vese hi forEach hetoh function pr yaha jud gaya he datastructure ke sath to isi function ko hum methode kahenge


// arr.forEach (callBackFunction)
//CallbackFunction : Here , it is a function to execute for each element in the array
//*A callback is a function passed as an argument to another function




//arr.forEach(val) =>{ // 3 parameters de sakte value->items , index->position , array
    //console.log(val);
    //}


    function abc(){
        console.log("Helloo");
    }
    function myFunc(abc){
        return abc;
    }

    
    let arr= [1 ,2 ,3 ,4, 5];
    // arr.forEach(function printVal(val){//value at each idx
    //     console.log(val);
    // })



    arr.forEach((val) => {
       console.log(val); 
    })

    let cities = ["pune" , "delhi" , "mumbai"];

    cities.forEach((vall , idx , cities) => {
        console.log(vall.toUpperCase(),idx , cities);
    })


    // forEach loop ->   Higher order function/methode   inetview me puch sakte //kam hota he arrya ke ek ek indx pe ja kr ek ek value pr operations perform krna
// kisi function as a parameter use krte ya fir function ko return krte


  
//Let's Practice
//Qs.  For a given array of numbers, print the square of each value using the forEach loop

let nums = [2 , 6 ,9 ,4 ,6];
 
nums.forEach((nuum) =>{
   console.log(nuum*nuum);//nuum**2
})



let nnum = [65 , 72 ,80];
let calcSquare = (nummm) => {
    console.log(nummm*nummm);//4225 ,5184 ,6400
}
nnum.forEach(calcSquare);


//Some more Array Methods
//Map methode  //forEach ke similar hi hota he bas ye ek new array create kr deta //forEach ke andar new array create ni hota

//Create a new Array with the results of some operation.
//The value its callback returns are used to form new array

//arr.map(callbackFnx(value,index,array))
//let newArr = arr.map((val) => {
  //  return val*2;
//})


let nnnums = [70 ,30 ,50];

let newArr = nnnums.map((val) =>{
    return val *2;
});
console.log(newArr);//140 , 60 ,100


//Filter method
//Creates a new array of elements that gives true for a condition/filter.
//Eg. all even elements

//let newArr = arr.filter((val) => {
    //return val % 2 === 0;
   // })

   let aaarr = [1 ,2 ,3 ,4 , 5 ,6 ,7 ,8];

   let evenArr = aaarr.filter((val) =>{
    return val % 2 === 0;
   })

   console.log(evenArr);//2 ,4 ,6
   console.log(aaarr);

   //Reduce Method
   //Performs some operations & reduces the array to a single value. It returns that single value.
   //eg -> avg

const array1 = [1 , 2 ,3 ,4];

//0 + 1 + 2 + 3 + 4 
const initialVal = 0
const sumWithInitial = array1.reduce((accumulator , currentValue) =>
  accumulator + currentValue, initialVal,
);
console.log(sumWithInitial);//10




let arrr = [1 ,2 ,3 , 4 ,5];

const output = arrr.reduce((res,curr) =>{
    return res + curr;
})
console.log(output);



//Largest element 
let aaaarr  = [5 ,6 ,3 ,101, 2];

const outputt = aaaarr.reduce((prev , cur) =>{
  return prev > cur ? prev : cur;
});
console.log(outputt);//101

//Let's Practice
//Qs. We are given array of marks of students .
//Filter out of the marks of students that scored 90+

let marks = [97 , 64 ,35, 67,95 ,92];

let toppers = marks.filter((val) =>{
    return val > 90;
})
console.log(toppers);


//Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
//Use the reduce methode to calculate sum of all numbers in the array.
//Use the reduce methode to calculate product of all numbers in the array.

let n = prompt("enter a number : ");

let ar = [];

for(let i=1; i<=n; i++){
    ar[i-1] = i;
}
console.log(ar);



//Use the reduce methode to calculate sum of all numbers in the array.
let ssum = ar.reduce((ress, currr) =>{
    return ress + currr;
})

console.log("sum = ",ssum);

//Use the reduce methode to calculate product of all numbers in the array.
let factorial = ar.reduce((resss, currrr)=>{
 return resss * currrr;
});
console.log("factoria = ",factorial);



