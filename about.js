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
let text =document.getElementById("text");
    let block =document.getElementById("block")
    text.style.display="block"
    function check() {
        text.innerText="About us"
    }
    check()