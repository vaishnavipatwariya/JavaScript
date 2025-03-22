//Properties
//tagName : returns tag for element nodes
//innerText : returns the text content of the element and all its children
//innerHTML : returns the plain text or HTML contents in the element 
//textContent : returns textual content even for hidden elements

let div = document.querySelector("div");
console.log(div)
console.dir(div)
console.dir(div.innerText)

//                    div
//                   /   \
//                 h4     ul
//                      /  |  \
//                   li   li  li
                
//console.log(div.innerText)           
console.dir(div.innerHTML)

//div.innerHTML = "<div>inner div </div>";




/* <body>
    <h1 style="visibility: hidden;">old Heading</h1>
    <div>
        <h3><i>Friuts</i></h3>
        <ul>
            <li>mango</li>
            <li>Apple</li>
            <li>litchi</li>
            <li>banana</li>
            <li>graps</li>
        </ul>
    </div>
   

    <script src="lecture6dot1.js"></script>
</body> */


// let heading = document.querySelector("h1")
// heading.innerText = "new heading";
// heading.innerHTML = "<i>new heading<i>";
// heading.textContent




//Let's Practice
//Qs. Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College student" to this using JS.




//Qs. Create divs with common class name - "box". Access them and add some unique of them









