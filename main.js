// for contact form and leave Comment
let menubar =document.getElementById("displays")
let closeicon=document.getElementById("close")
const menu =()=>{
    
    menubar.classList.toggle("display-block");

see()
  
}
const see=()=>{
    if(closeicon.style.display!="block"){
        closeicon.style.display="block"
    }
    else{
        closeicon.style.display="none"
    }
}
document.querySelector("#form").addEventListener("submit" ,call);
let name =document.getElementById('name');
let email =document.getElementById('email');
let password =document.getElementById('current-password');
let textarea =document.getElementById('message'); 
textarea.onclick =font;
function font(){
      textarea.setAttribute("style" ,"font-size:18px");
     
} 
function call(){
    if(name.value==""){
        alert('please fill name');
    }
    else if(email.value==""){
        alert('please fill email');
    }
    else if(password.value==""){
        alert('please enter your password');
    }
    else if(textarea.value==""){
        alert('please fill any message');
    }
    else {
        alert('your Message was successfully submit');
    }

}
let lists =document.getElementsByClassName("color")
const check =()=>{
  lists[a].style.borderBottom ="2px solid orange"
}


// Leave Comment start here
