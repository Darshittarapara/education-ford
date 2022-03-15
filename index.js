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
let overlayone =document.getElementById("one");
let overlaytwo =document.getElementById("two");
let overlaythree =document.getElementById("three");

const displayblock =(a)=> {
    if(a==0){
        overlayone.classList.toggle("display")
    }
    else if(a==1){
        overlaytwo.classList.toggle("display")
    } 
    else if(a==2){
        overlaythree.classList.toggle("display")
    }
  

}
