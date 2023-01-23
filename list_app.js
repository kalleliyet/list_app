let ul=document.querySelector("ul")
let button=document.querySelector("button")
let input=document.querySelector("input")
let span=document.getElementById("ajout")
function addapp() {
    if (input.value===''){
      alert("it's empty");
      return;
    }
    
    let li=document.createElement("li")
    li.innerHTML=input.value;   
    li.setAttribute("style","display:flex;flex-direction:row;")
    ul.appendChild(li);

    input.value ="";
    }
document.addEventListener("keydown",e=>{
    if(e.key==="Enter"){
        addapp()
    };
    
})
button.addEventListener("click",addapp)
input.addEventListener("keyup",e=>{
    input.style.color = "blue";
    span.innerHTML=input.value
})
