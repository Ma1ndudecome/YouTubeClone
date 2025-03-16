"use strict"
import { URL } from "../URL/URL.js"
let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")
const burger = document.querySelector(".burger")
export const aside = document.querySelector("aside")
const backdrop = document.querySelector(".backdrop")
const subscriberContainer = document.querySelector(".sing_int svg")
const SingButton = document.querySelector(".SignIn_element")



burger.addEventListener('click', ()=>{
    if(window.innerWidth > 1200 ){
        return
    }

   aside.classList.toggle("wow")
   aside.classList.add("block")
   if(aside.classList.contains("wow")){
        backdrop.style.display = 'block'
   }else{
    backdrop.style.display = 'none'

   }
})
backdrop.onclick = ()=>{
aside.classList.remove("wow")
aside.classList.remove("block")

backdrop.style.display = 'none'
}


glass_adaptation.addEventListener("click",(e)=>{
    // search.style.position ="fixed"
   
    adaptation.style.display = "flex";
    glass_adaptation.style.display ="none"
})

img_adaptation.addEventListener("click",() =>{
    adaptation.style.display = "none";
   glass_adaptation.style.display ="flex"
})
const functionLogin = (e)=>{
    e.preventDefault()
    window.location.href = URL.logInURL;
}
subscriberContainer.onclick = functionLogin
SingButton.onclick = functionLogin





// мой код
// import { buttonMoreSubscriber  } from "./PostToToken.js";

// const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
// const aside_bottom_Show_All_Hide_All = function () {
   
//    show_All_Hide_All.style.display = "block"

//    console.log("1")
// }

// const show_All = document.querySelector(".show_All")

// const show_All_Display_block = function () {
//     show_All.style.display = "flex"
//     // show_All.style.width = "100%"
// }



// buttonMoreSubscriber.onclick = () => {
//     loadSubsiber(state.access_token)
    
//     aside_bottom_Show_All_Hide_All();
//      show_All_Display_block();
// }


// //Скрыть все
// const hide_All = document.querySelector(".hide_All")

// // const hide_All_Function = function () {
// //    hide_All.onclick = () =>{

// //     loadSubsiber(state.acessToken )

// //     show_All_Hide_All.style.display = "none"
// //    }
// // }
// // hide_All_Function()

// hide_All.onclick = () =>{

//     loadSubsiber(state.access_token )
    
//     show_All_Hide_All.style.display = "none"
//    }

   

//    show_All.onclick = () =>{

//     show_All.style.display = "none"
//     show_All_Hide_All.style.display = "none"
//    }


//Показать кнопки Покахать все и скрыть подписки 

//   const show_All_Hide_All = document.querySelector(".aside_bottom_Show_All_Hide_All")
//  export const aside_bottom_Show_All_Hide_All = function () { 
//      show_All_Hide_All.style.display = "block"

//      console.log("1")
//   }

// //Скрыть все
//  const hide_All = document.querySelector(".hide_All")



//  hide_All.onclick = () =>{

//     loadSubsiber(state.access_token )
    
//      show_All_Hide_All.style.display = "none"
//     }

   
//     show_All.onclick = () =>{

//      show_All.style.display = "none"
//      show_All_Hide_All.style.display = "none"
//     }

