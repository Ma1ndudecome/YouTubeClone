"use strict"


let glass_adaptation = document.getElementById("glass_adaptation")
let adaptation = document.getElementById("adaptation")
let img_adaptation = document.getElementById("img_adaptation")
const burger = document.querySelector(".burger")
const aside = document.querySelector("aside")
const asideSign = document.querySelector(".aside_SignIn")
const menuExplore = document.querySelector(".menu_Explore.down")
const exploreContainer = document.querySelector(".explore_Container")
const exploreItem = document.querySelectorAll(".Explore_element_menu li")
const exploreItemA = document.querySelectorAll(".Explore_element_menu li a")
const exploreItemAP = document.querySelectorAll(".Explore_element_menu li a p")



function el(){
    const mas = []
    for(let i = 0; i < exploreItem.length - 6; i +=1){
        mas.push(exploreItem[i])
    }
    return mas
}
// window.addEventListener('resize', ()=>{
//     if(window.innerWidth < 820){
//         aside.classList.add('none')
//     }else{
//         aside.classList.remove('none')
//     }
// })

glass_adaptation.addEventListener("click",(e)=>{
    // search.style.position ="fixed"
   
    adaptation.style.display = "flex";
    glass_adaptation.style.display ="none"
})

img_adaptation.addEventListener("click",() =>{
    adaptation.style.display = "none";
   glass_adaptation.style.display ="flex"
})
burger.onclick = ()=>{
    if(window.innerWidth > 1380){
        el().forEach(el=>{
            el.classList.toggle('dF')
            el.classList.toggle('jcC')
            el.classList.toggle('aiC')
        })
        exploreItemA.forEach(el=>{
            el.classList.toggle('fdC')
            el.classList.toggle('gap10')

        })
        aside.classList.toggle("w80")
        menuExplore.classList.toggle('none')
        asideSign.classList.toggle('none')
        exploreContainer.classList.toggle('pad0')
        exploreItemAP.forEach(el=>el.classList.toggle("fS12"))
    }
    aside.classList.toggle("none")
    aside.classList.toggle('block')

   

}
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