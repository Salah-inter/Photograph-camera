let toggler =document.querySelector(".toggle") ;
let nav =document.querySelector(".opp");
let close =document.querySelector(".close");

toggler.onclick = function(){
    nav.classList.toggle("active");
}

 //toggler. onclick =function(){
  //   nav.classList.add("open");
 //}
 close.onclick =function(){
     this.parentElement.classList.remov("open");
 }
 document.onkeyup =function(e){
    console.log(e);
    if(e.key === "Escape"){
        this.parentElement.classList.remov("open");
     }
 }