//DOM selection
const Form = document.getElementById("myForm");
const Form2 = document.querySelector("#myForm");
console.log(Form);

//DOM manipulation
const ul =document.querySelector(".items");

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.remove();

ul.firstElementChild.textContent="Learning Dom manipulation";
ul.children[1].innerText="Hi";
ul.lastElementChild.innerHTML="<h1>Big</h1>";

const btn=document.querySelector("#btn");
btn.style.background="blue";

//DOM Events
btn.addEventListener("click",function(e){
    e.preventDefault();
    console.log("Button Clicked");
})