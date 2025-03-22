//Let's Practice
//Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College student" to this using JS.

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + "from Apna College students";



//Qs. Create divs with common class name - "box". Access them and add some unique of them
let divs = document.querySelectorAll(".box");
//console.log(divs[1]);
// console.log(divs[2]);

let idx = 0;
for (div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
}


// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

