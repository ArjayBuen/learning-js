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
btn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(`Button Clicked!`);
    // Form2.style.background="black"; applicable for dark mode
} );

//Form Validation
const Username=document.querySelector("#username");
const Password=document.querySelector("#password");
const Msg=document.querySelector("#msg");
btn.addEventListener("click", function(e){
    e.preventDefault();
    
    if(Username.value.length===0||Password.value.length===0){
        Msg.innerHTML=`<h4 class="error">Please complete details</h4>`;
        setTimeout(()=>document.querySelector(".error").remove(),3000);
    }else{
        console.log("Both have value");
        Form2.submit();
    }
} );
