//Array in js
//collection of items->linear

//create Array 
//let heroes = ["ironman" , "hulk , "thor","batman"];
//let marks = [96,75,48,83,66];
//let info = ["rahul",86,"Delhi"];
// let marks = {
//     stu1: 97,
//     stu2: 82,
//
// }

let marks = [97, 82 , 75 , 64 ,36];
console.log(marks);
console.log(marks.length);//property

let heroes = ["ironman" , "thor" , "hulk" , "shaktiman" , "spiderman" , "antman"];//string immutable hoti he chnage nhi kr sakte he
//but array mutable hota
console.log(heroes);
console.log(typeof heroes);
heroes[0] = "hoooo";
console.log(heroes[0]);
console.log(heroes);
heroes[0] = "ironman";

//Array Indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[3]);
console.log(marks[4]);

marks[2] = 60;
console.log(marks);
console.log(marks[2]);

//Looping over an Array
//loops - > iterable (strings , objects , arrays)
//print all elements of an array

for(let i = 0 ; i < heroes.length; i++){//standard way
    console.log(heroes[i]);
}
for(let idx = 1 ; idx <= marks.length ; idx++){//not standard way
    console.log(marks[idx-1]);
}

//for of
// for(let hero of heroes){
//     console.log(hero);
// }


let cities= ["delhi" , "pune" , "mumbai" , "hydrabad", "gurgaon"];
for (let city of cities){
    console.log(city);    
}
for (let city of cities){
    console.log(city.toUpperCase());  
}

//Let's Practice
//For a given array with marks of students-> [85 , 97 , 44 , 37 ,76 , 60]
//Find the average marks of the entire class

let markss = [85 , 97 , 44 , 37 , 76 , 60];
let sum = 0;
// sum = marks[0] + marks[1] + marks[2];
for(let val of markss){
    sum += val; //sum = sum + val;
}
let avg = sum / markss.length;
//console.log("average  marks of class = ",avg);
console.log(`average  marks of class ${avg}`);

//Q2 
//for a given array with prices of items -> [250 , 645 , 300 , 900, 50]
//All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.

//eg. 300 -> 10 % off(30 off) => 300 -30 => 270
//eg. 900 -> 10 % off(90 off) => 900 -90 => 810    10 % => val/10

let items = [250 , 654 , 300 , 900 , 50];

let i = 0;
for (let val of items){
   // console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
   // console.log(` offer (10 % ) = ${offer}`);
    console.log(`value after offer = ${items[i]}`);
    i++;
}



let itemss = [250 , 654 , 300 , 900 , 50];
for(let i = 0 ; i < itemss.length; i++){
    let offer = itemss[i] / 10;
    itemss[i] = itemss[i] - offer;
}
console.log(itemss);




//Arrays in js
//Array Methods
//push():add to end
//pop(): delete from end & return
//toString() : converts array to string

let foodItems =["potato" , "apple" ,"litchi" , "tamato"];
foodItems.push("chips" , "burger" , "paneer");//existing/original array ke andar hi change kr dega
console.log(foodItems);//paneer
foodItems.pop();//original array ke andar change krta
let deletedItem = foodItems.pop();//burger
console.log(foodItems);
console.log("deleted", deletedItem);//burger
console.log(foodItems.toString());
console.log(foodItems);
// foodItems.pop(apple);//not work
// console.log(foodItems);
let marksss = [23 , 5 ,2 ,56,10];
console.log(marksss.toString());


//Array Methods
//Concat(): joins multiple arrays & returns result
//unshift() : add to start // like push
//shift(): delete form start & return  //like pop

let marvelHeroes = ["thor" , "spiderman" , "ironman"];
let dcHeroes = ["superman" , "batman"];
let indianHeroes = ["shaktiman" , "krish"];

let heroess = marvelHeroes.concat(dcHeroes,indianHeroes);
console.log(heroess);

marvelHeroes.unshift("antman");
console.log(marvelHeroes);

marvelHeroes.shift();
console.log(marvelHeroes);

let val = marvelHeroes.shift();
console.log("deleted ",val);//thor
console.log(marvelHeroes);

//ARRAYS METHODS
//slice() : returns a piece of the array
//slice(startIdx,endIdx)
//splice() : change original array(add , remove , replace)
//splice(startIdx,delCount,newElt...)


let marvelHeroess = ["thor" , "spiderman" , "ironman" , "antman" , "Dr.Strange"];
console.log(marvelHeroess);
console.log(marvelHeroess.slice(1,3));//index 3 include nhi hogA
console.log(marvelHeroess.slice(1));//slice method original array ko change nhi krta
console.log(marvelHeroess.slice());

//splice();

let num = [0 ,1 ,2 ,3 ,4 ,5 ,6 ,7 , 8];
//add element
console.log(num.splice(2,4,101,102));//2 indx se start , 4 elemt bich ke delete krna index 2 se lekar (2 ,3 ,4 ,5),,,, 101 ,102 add krna he
console.log(num);//0 , 1 , 101 , 102 , 6 ,7 ,8
console.log(num.splice(1,0,10001,10002));
console.log(num);

//delete element
num.splice(2,1);
console.log(num);

//replace Element
num.splice(3 ,1 ,999)
console.log(num)
num.splice(5);//delete 6 ,7 ,8
console.log(num)
console.log(num.splice());//kn delete
console.log(num);//kn delete


//let's Practice
// Create an array to store companies - > "Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"
//a. Remove the first company from the array
//Remove Uber & Add Ola in its place
//Add Amozon at the end

let companies = ["Bloomberg" , "Microsoft" , "Uber" , "Google" , "IBM" , "Netflix"];
console.log(companies);
companies.shift();
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);
companies.push("Amozon");
console.log(companies);