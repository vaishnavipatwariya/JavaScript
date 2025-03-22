
console.log("HELLO WORLD!");
//COMMENTS IN JS
//Part of code which is not executed
//this is single line comment
/* this is a multi
line comment*/ 

//OPERATORS IN JS
/* Used to perform some opertation on data
Arithmetic Operators + , - , * , /
Modulus (% -> remendor)
Exponentiation (2^2=4),(a**b)
Increment  (a++),(++a)
Decrement (a--),(--a)
*/

let a = 5;
let b = 2;
let c = a + b;
console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log(a + b);
console.log(c);

console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);//5 ^ 2 = 25

//Unary operator
a = a + 1;
console.log("a = ",a);//6
a++;//post increment
console.log("a = ",a);//7
++a;//pre increment
console.log(a);//8

a = a - 1;
console.log("a = ",a);//7
a--;
console.log("a = ",a);//6
console.log(--a);//5
--a;
console.log("a = ",a);//4

console.log("a++ = ",a++);//4
console.log("a = ",a);//5
console.log("a-- = ",a--);//5
console.log("a = ",a);//4
console.log("--a = ",--a);//3
console.log("a = ",a);//3
console.log("a-- = ",a--);//3
console.log("a = ",a);//2

//ASSIGNMENT OPERATOR
// = , += , -= , *= , **= , %=
//a = 1 , a+=1 -> (a = a+1) , a-=5 -> (a = a-5) , a*=3 -> (a = a*3) , a**=2 -> (a = a**2)
console.log("a = ", a, "& b = ", b);// 2 ,2 
a += 4 ; //a = a+4 
console.log("a = ",a);//6
a -= 2 ; //a = a-2 
console.log("a = ",a);//4
a *= 2 ; //a = a*2 
console.log("a = ",a);//8
a **= 2 ; //a = a**2 
console.log("a = ",a);//64
a %= 3 ; //a = a%3 
console.log("a = ",a);//1


//COMPARSION OPERATORS
//equal to == , equal to & type === , not equal to  != , not equal to & type !==
// > , >= , < , <=
console.log("a = ", a, "& b = ", b);// 1 ,2 
console.log("a == b ", a==b );//false
console.log("a >= b ", a>=b );//false
console.log("a <= b ", a<=b );//true
console.log("a != b ", a<=b );//true

let d = 5;//number
let e = "5";//String 
console.log("d = ", d, "& e = ", e);// 5 , 5
console.log("d == e ", d==e );//true

//Strict version
console.log("d = ", d, "& e = ", e);// 5 , 5
console.log("c === e ", c===e );//false
console.log("d = ", d, "& e = ", e);// 5 , 5
console.log("c !== e ", c!==e );//true


//LOGICAL OPERATORS IN JS
//Logical AND &&   //if condition one is true and condition second is also true then it gives true
//Logical OR ||
//Logical NOT !

let f = 6;//number
let g = 5;//String 
console.log("f = " ,f, " & g = " , g);
let cond1 = f > g; //true
let cond2 = f === 6 ;//true
console.log("cond1 && cond2 = ", cond1 && cond2);//true
let cond3 = f > g; //true
let cond4 = f === 7 ;//false
console.log("cond1 && cond2 = ", cond3 && cond4);//false
console.log("cond1 && cond2 = ", f < g && f===6);//false
console.log("cond1 && cond2 = ", f < g && f!==6);//false
//&& Logical AND
// T    T  =  T
// T    F  =  F
// F    T  =  F
// F    F  =  F


//|| Logical 0R
console.log("cond1 || cond2 = ", cond3 || cond4);//true //  (|)PIPE SYMBOLE
console.log("cond1 || cond2 = ", f < g || f===6);//true
console.log("cond1 || cond2 = ", f > g || f!==6);//true
console.log("cond1 || cond2 = ", f < g || f!==6);//false
//|| Logical 0R
// T    T  =  T
// T    F  =  T
// F    T  =  T
// F    F  =  F


//Logical NOT!
console.log("!(6 < 5) = ", !(6 < 5));//true
console.log("!(6 > 5) = ", !(6 > 5));//false
//Logical NOT!
// T -> F
// F -> T


//CONDITION STATEMENT
//to implement some condition in the code
//if Statement
// let color;
// if(mode === "dark-mode"){
//     color = "black";
// }

let age = 25;//you can vote

if(age > 18){
    console.log("you can vote");
}
if(age < 18){
    console.log("you canot vote");
}



let agee = 8;//you cannot vote
if(agee > 18){
    console.log("you can vote");
}
if(agee < 18){
    console.log("you cannot vote");
}



let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
if(mode === "light"){
    color = "white";
}
console.log(color);



//if - else Statement
let modee = "blue";
let colorr;
if(modee === "darks"){
    colorr = "black";
}else{
    colorr = "white";
}
console.log(colorr);


let ageee = 8;//you cannot vote
if(ageee > 18){
    console.log("you can vote");
}else{
    console.log("you cannot vote");
}



//odd or even
let num = 10;

if(num % 2 == 0){
    console.log(num, "is even");
}else{
    console.log(num, "is odd");
}


//else if statement
let aage = 38;//middle
if(aage < 18){
    console.log("junior");
}else if (aage > 60){
    console.log("senior");
}else{
    console.log("middle");
}


//let mmode = "yellow";
let mmode = "dark";//black
let ccolor;

if(mmode === "dark"){
    ccolor = "black";
}else if(mmode === "blue"){
  color = "blue";
}else if(mmode === "pink"){
    ccolor = "pink";
}else{
    ccolor = "white"
}
console.log(ccolor);

//if(mmode === "dark") console.log(mmode);

//good way
if(mmode === "dark"){
    console.log(mmode);//dark
}



//TERNARY OPERATORS//simpler , compact way
//3 operands //a ? b : c
//condition ? true output : false output
let aagge = 45;
// let result = aagge >= 18 ? "adult" : "not adult"; 
// console.log(result);
 aagge >= 18 ? console.log("adult") : console.log("not adult"); //adult

 //SWITCH STATEMENT
 const expr ='Papayas';
 switch (expr){
    case 'orange':
        console.lo('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
        console.log('Mangoes are $2.74 a pound.');
        break;
    case 'Papayas':
        console.log('Papayas are $2.79 a pound.');//output
        break;
    case 'papayas':
        console.log('Papayas are $5.74 a pound.');
        break;
    default:
        console.log('Sorry , we are out of  ${expr}.');
    
 }


 //alert("Hello World");//ONE TIME POPUP
 let name = prompt("helloo! , Enter your name : ");//take input also
 console.log(name);


 //let's Practice
 //Q1  Get user to input a number using prompt("Enter a number :").Check if the number is a multiple of 5 or not
 let nnum = prompt("enter a number : ");
 
 if (nnum % 5 === 0){
    console.log(nnum, " is multiple of 5");
 }else {
    console.log(nnum, " is NOT a multiple of 5");
 }


 //Q2 Write a code which can give grades to students according to their scores:
 // 90-100,A
 // 70-89,B
 // 60-69,C
 // 50-59,D
 // 0-49,F

 let score = prompt("enter your score (0-100) : ");
 let grade;
 

 if(score >= 90 && score <= 100) {
    grade = "A+";
 }else if(score >= 80 && score <= 89) {
    grade = "A";
 }else if(score >= 70 && score <= 79) {
    grade = "B+";
 }else if(score >= 60 && score <= 69) {
    grade = "B";
 }else if(score >= 50 && score <= 59) {
    grade = "C+";
 }else if(score >= 40 && score <= 49) {
    grade = "C";
 }else if(score >= 30 && score <= 39) {
    grade = "D+";
 }else if(score >= 20 && score <= 29) {
    grade = "D";
 }else{
    grade = "F";
 }
 console.log("according to your scores , your grade was : ",grade);