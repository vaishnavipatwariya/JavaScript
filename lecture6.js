console.log("Hello World!");
alert("jay shree radhe radhe");


//WINDOW OBJECT
//The window object represents an open window in a browser.
//It is browser.It is browser's object(not JavaScript's) ans is automatically created by browser.

//It is a global object with lots of properties and methods.

console.log(window)
window.console.log("Hare Krishna");

//What is DOM
//When a web page is loaded, the browser creats a Document Object Model (DOM) of the page
//                       window          //all nodes are objects
//                         |
//                      document
//                         |
//                        html
//                    /          \
//              head               body
//          /  |  |  \           /      \
//       meta,meta,title,link   div     script
//                             / | | \          
//                           img,h1,p,div
//
//html code sare elements ko hum  js ke andar access kr sakte he
//js ke andar aake object me convert ho jate aur us special object ko hum bolte he document aur ye document availabe hota he hamare window object ke andar
// window object ka subobject

console.log(window.document);// log print krne ke liye use krte //yaha html code print ho jayega
window.document;
console.dir(window.document); // dir (direction) -> special objects hote he jese document toh unki properties and methods print karwane ke kaam aata
console.dir(document.body);
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[2]);
console.log(document.body.childNodes[3]);
console.log(document.head);
console.dir(document.head);

//dynamic changes ke liye use krt he  //run time pe change kr sakta he user  
document.body.style.background = "skyblue";
//document.body.childNodes[3].innerText = "abcd";


//<link rel="stylesheet" href="lecture6.css"></link>
//JAB HUM JS KO BODY SE PHLE LIKH LETE LOAD KR LETE TOH USKE ANDAR  DOCUMENT ELEMENT ACCESSIBLE NHI HOTE





//DOM Manipulation
//id unquie for each element
//Selecting with id    id ke liye # use kia jata    #id id ke according bhi style de sakte 
//document.getElementByld("myId")

let heading = document.getElementById("heading");//h1
console.log(heading);
console.dir(heading);




//.class    .  use kr krte class ke liye
//class bohot sare elements ke liye same ho sakti
//Selecting with class
//document.getElementsByClassName("myClass")

let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

let button = document.getElementById("myId");
console.dir(button);



//Selecting with tag
//document.getElementsByTagName("p");
let parahs = document.getElementsByTagName("p");
console.dir(parahs);



//Query Selector
//document.querySelector("myId / myClass / tag")
//returns first element

//document.querySelectorAll("myId / myClass / tag")
//returns a NodeList

let firstEl = document.querySelector("p");// matching 1st element  dedega
console.dir(firstEl);

let allEl = document.querySelectorAll("p");
console.dir(allEl);


let firstEll = document.querySelector(".myClass");// matching 1st element  dedega
console.dir(firstEll);

let allEll = document.querySelectorAll(".myClass");
console.dir(allEll);


let firstElll = document.querySelector("#myId");
console.dir(firstElll)

//Properties
//tagName : returns tag for element nodes
//innerText : returns the text content of the element and all its children
//innerHTML : returns the plain text or HTML contents in the element 
//textContent : returns textual content even for hidden elements

console.log(firstEl.tagName);
console.log(firstEll.tagName);
console.log(firstElll.tagName);

// parent , child , descendants
//parent child siblings

//DOM tree
//text node
//comment
//element //dom ke uper hum hamesha jadatar elements nodes ke uper hi kaam kr rahe hote he


console.log(document.body.firstChild);
console.log(document.body.lastChild);

//document.querySelector("div").children;// HTMLCollection(2) [div ,p]



