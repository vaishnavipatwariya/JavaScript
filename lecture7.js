//DOM MANIPULATION
//Attributes

//getAttribute(attr)//to get the attribute value
//setAttribute(attr,value)//to set the attribute val th

//Style
//node.style


//getAttribute(attr)//to get the attribute value
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para);

let parah = document.querySelector("p");
console.log(parah.getAttribute("class"));


//setAttribute(attr,value)//to set the attribute val th
let paragh = document.querySelector("p");
console.log(paragh.setAttribute("class","newClass"));


//Style
//node.style
let divv = document.querySelector("div");
console.log(divv)
/* <body>
    <div id="box" name="JSdiv" style="background-color: rgb(27, 114, 85);">This is a div</div>
    <p class="para">this is a simple line</p>
    <script src="lecture7.js"></script>
</body> */
console.log(divv.style)//inline style show karega

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";

div.style.fontSize = "26px";
div.innerText = "Jay Shree Radhe Radhe!"
