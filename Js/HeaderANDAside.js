"use strict"

let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")





glass_adaptation.addEventListener("click",(e)=>{
    // search.style.position ="fixed"
   
    adaptation.style.display = "flex";
    glass_adaptation.style.display ="none"
})

img_adaptation.addEventListener("click",() =>{
    adaptation.style.display = "none";
   glass_adaptation.style.display ="flex"
})


// function f1(){
//     if(window.innerWidth < 590){
//         glass_adaptation.style.display ="flex"
//        }
//         else{
//         glass_adaptation.style.display ="none"
//         }
// }
// f1()
// window.addEventListener("resize",f1)

