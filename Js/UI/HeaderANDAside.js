"use strict"

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
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/youtube.force-ssl&redirect_uri=${redirectUri}&response_type=code&client_id=${cliendId}&access_type=offline`;
}
subscriberContainer.onclick = functionLogin
SingButton.onclick = functionLogin



