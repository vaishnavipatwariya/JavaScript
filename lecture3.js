//LOOPS IN JS
//loops are used to execute a piece of code again & again
//for loop
for (let i = 1; i <= 10; i++) {
    console.log("Radhe Radhe");//5 times execution
}
console.log("loop  has ended");

//Calculate sum of 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
console.log("Sum = ", sum);//55

for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

//console.log(i);//redeclare krna padega i ko block ke andar hi sirf access kr sakte bahar nhi,agar var i hota toh kr sakte the


//while loop
//initialization
//while (condition){
//do some work
//updation(mostly inside)
//}

let i = 1;
while (i <= 20) {
    console.log("i = ", i);
    i++;
}

//do while
//do{
//do some work
//}while(condition);

let j = 20;
do {
    console.log("krishna")
} while (i <= 10);


//for-of-loop // help to iterrate on some special data types ,strings and array ke uper loop lagane me help krta
// for(let val of strVar){
//     //do some work
// }


//for-of-loop
let str = "Radha";
let size = 0;
//for(let val of str)
for (let i of str) {// i (iterator) - > characters
    //console.log(i);
    console.log("i = ", i);//i ki place pe val bhi likh sakte
    size++;
}
console.log("String size = ", size);//5


//for-in-loop // objects and arrays ke liye use krte
// for(let key in objVar){
//     //do some work
// }

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa: 7.5,
    isPass: true,
};

for (let key in student) {
    //console.log(key);
    console.log("key=", key, " , value = ", student[key]);
}

//PRACTICE Q1
for (let num = 0; num <= 100; num++) {
    if (num % 2 === 0) {
        //even number
        console.log("num = ", num);
    }
}


// for (let num = 0; num <= 100; num++){
//     if(num % 2 !== 0){
//         //odd number
//         console.log("num = ",num);
//     }
// }



//isko comment out mat krna 
//Practice Q2
//Create a game where ou start with any random game number.Ask the user to keep guessing the game number until the user enters correct value.
// let gameNum = 50;
// let userNum = prompt("Guess the game number : ");//prompt strings leta he "50" and !== use krna vrna 

// while (userNum != gameNum) {
//     userNum = prompt("you entered wrong number. Guess again : ");
// }
// console.log("Congratulations, you entered the right number");



//STRINGS IN JS
//Strings is a sequence of characters used to represent text

//Create String
//let str = "Apna College";

//String Length   //inbuilt properties
//str.lenght

//Sring Indices
//str[0], str[1],str[2]


//Strings
let str1 = "Radharaman";
let str2 = "Kanha";//index 0,1,2,3,4,
console.log(str1);
console.log(str2);
console.log(str1.length);
console.log(str2.length);
console.log(str1[0]);
console.log(str1[5]);
console.log(str1[8]);


//Template Literals in JS
//A way to have embadded expression in strings

//'this is a template literal'

//String Interpolation
//To create strings by doing substitution of placeholders
//'string text ${expression}string text'

//Template Literals 
let obj = {
    item: "pen",
    price: 10,
};

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);//10 string ka part ho gaya

console.log("the cost of",obj.item, "is" ,obj.price, "rupees");

let specialStrings ='This is a template literal ${1 +2 +3}';
let specialStringss =`This is a template literal ${1 +2 +3}`;
console.log(specialStrings);
console.log(specialStringss);
console.log(typeof specialStrings);

//escape character
// \n -> next line
// \t -> tab space

console.log("mera \n kanha"); 
console.log("mera \t kanha");//13 \t single character count hota lenght 12 batayega




//STRING METHODS IN JS
//These are bulit-in-function to manipulate a string
//str.toUpperCase()
//strtoLowerCase()\
//str.trim()//remove whitespaces form (starting , end)

let str3 = "Rradhaji";
console.log(str3.toUpperCase());
console.log(str3);//original string same rahegi babes
console.log(str3.toLowerCase());

let str4 = "Kkkkkkkeeeeeeeeeeeesssssssssshhhhhh";
// str4 = str4.lengthtoUpperCase();
// console.log(str4);//fir capital vala print hoga
let newStr = str4.toUpperCase();
console.log(str4);
console.log(newStr);

//strings are immutable in js (jo change nhi ho original string nhi change hoti)

let str5 = "            n a ina        ";
console.log(str5);
console.log(str5.trim());



// String Methods in js
//str.slice(start,end?)//returns part of string
//str1.concat(str2)//joins str2 with str1
//str.replace(searchVal,newVal)
//str.charAt(idx)

let str6 = "012345678";
console.log(str6.slice(1 ,3)); //end index include nhi hota nad optional bhi hota
console.log(str6.slice(6));

let str7 = "ram";
console.log(str7.slice(0 ,2));

console.log(str6.concat(str7));

let str8 = "k";
let str9 = "v";
let res = str8.concat(str9);
console.log(res);
res = str9.concat(str8);
console.log(res);
res = str8 + str9;
res =  str8 + str9 + " forever ";
console.log(res);

//replace method
let str11= "hellololo";
console.log(str11.replace("lo","p"));
console.log(str11.replaceAll("lo","p"));
let str10 = "radhejiii";
console.log(str10.replace("ra","kanha raaa"));


let str12 = "IloveRadhaRamanJI";
console.log(str12.length);//17
console.log(str12.charAt(0));
console.log(str12.charAt(5));
console.log(str12.charAt(9));
console.log(str12.charAt(16));//I
str12[0] = "s";
console.log(str12);//I HI RAHEGA S NHI HOGA KYUKI ORIGINAL STRING CHANGE NHI HOTI IMMUTABLE STRING HOTI
str12 = str12.replace("I" , "V");
console.log(str12);


//Let's Practice
//Q1 Prompt the user to enter theor full name. Generate a username for them based on the input.
//Start username wirh @ , followed by their full name and ending with the fullname length.
//eg. user name = "nannaPatwariya" , username should be "@nannaPatwariya14"

let fullnamee = prompt("enter your fullname without space : ");

let usernamee = "@" + fullnamee + fullnamee.length;
console.log(usernamee);




